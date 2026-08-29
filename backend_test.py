import requests
import sys
from datetime import datetime
import json

class KFZTechnikAPITester:
    def __init__(self, base_url="https://auto-repair-stage.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}" if not endpoint.startswith('http') else endpoint
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=headers, timeout=10)
            elif method == 'DELETE':
                response = requests.delete(url, headers=headers, timeout=10)

            success = response.status_code == expected_status
            
            result = {
                "test_name": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": response.status_code,
                "success": success,
                "response_data": None,
                "error": None
            }

            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    result["response_data"] = response.json()
                except:
                    result["response_data"] = response.text[:200]
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    error_data = response.json()
                    result["error"] = error_data
                    print(f"   Error: {error_data}")
                except:
                    result["error"] = response.text[:200]
                    print(f"   Error: {response.text[:200]}")

            self.test_results.append(result)
            return success, response.json() if success and response.content else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            result = {
                "test_name": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": "ERROR",
                "success": False,
                "response_data": None,
                "error": str(e)
            }
            self.test_results.append(result)
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        return self.run_test("API Root", "GET", "", 200)

    def test_contact_form_submission(self):
        """Test contact form submission"""
        test_data = {
            "name": "Test User",
            "phone": "06103123456",
            "email": "test@example.com",
            "message": "Dies ist eine Testnachricht für die KFZ-Werkstatt."
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "contact",
            200,
            data=test_data
        )
        
        if success and response:
            # Verify response structure
            required_fields = ["id", "name", "phone", "email", "message", "created_at", "status"]
            missing_fields = [field for field in required_fields if field not in response]
            if missing_fields:
                print(f"⚠️  Warning: Missing fields in response: {missing_fields}")
            else:
                print("✅ Response structure is correct")
                
        return success, response

    def test_contact_form_validation(self):
        """Test contact form validation with invalid data"""
        # Test with missing required fields
        invalid_data = {
            "name": "",  # Empty name
            "phone": "123",  # Too short phone
            "email": "invalid-email",  # Invalid email
            "message": "short"  # Too short message
        }
        
        success, response = self.run_test(
            "Contact Form Validation (Invalid Data)",
            "POST",
            "contact",
            422,  # Expecting validation error
            data=invalid_data
        )
        
        return success, response

    def test_get_contact_forms(self):
        """Test getting contact forms (admin endpoint)"""
        return self.run_test("Get Contact Forms", "GET", "contact", 200)

    def test_status_endpoints(self):
        """Test status check endpoints"""
        # Test GET status
        get_success, _ = self.run_test("Get Status Checks", "GET", "status", 200)
        
        # Test POST status
        status_data = {"client_name": "test_client"}
        post_success, _ = self.run_test(
            "Create Status Check",
            "POST", 
            "status",
            200,
            data=status_data
        )
        
        return get_success and post_success

def main():
    print("🚀 Starting KFZ-Technik-Dreieich API Tests")
    print("=" * 50)
    
    tester = KFZTechnikAPITester()
    
    # Run all tests
    print("\n📋 Running Backend API Tests...")
    
    # Test API root
    tester.test_api_root()
    
    # Test contact form functionality
    tester.test_contact_form_submission()
    tester.test_contact_form_validation()
    tester.test_get_contact_forms()
    
    # Test status endpoints
    tester.test_status_endpoints()
    
    # Print final results
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return_code = 0
    else:
        print("❌ Some tests failed!")
        return_code = 1
    
    # Save detailed results
    results_file = "/app/backend_test_results.json"
    with open(results_file, 'w') as f:
        json.dump({
            "timestamp": datetime.now().isoformat(),
            "total_tests": tester.tests_run,
            "passed_tests": tester.tests_passed,
            "success_rate": f"{(tester.tests_passed/tester.tests_run)*100:.1f}%",
            "test_results": tester.test_results
        }, f, indent=2)
    
    print(f"📄 Detailed results saved to: {results_file}")
    
    return return_code

if __name__ == "__main__":
    sys.exit(main())