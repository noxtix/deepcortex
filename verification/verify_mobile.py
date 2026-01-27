from playwright.sync_api import sync_playwright
import time
import sys

def verify_mobile():
    with sync_playwright() as p:
        # iPhone SE device descriptor
        iphone = p.devices['iPhone SE']
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(**iphone)
        page = context.new_page()

        try:
            print("Navigating to home page...")
            page.goto("http://localhost:3000")

            # Wait for animation to finish (simple delay) + explicit element wait
            print("Waiting for page load and animations...")
            time.sleep(2)

            # 1. Capture Screenshot
            screenshot_path = "verification/home_mobile.png"
            page.screenshot(path=screenshot_path)
            print(f"Screenshot saved to {screenshot_path}")

            # 2. Check for Search Input (Updated selector)
            print("Locating search input...")
            # The placeholder is long: "What do you want to create today?..."
            # Using a broader selector or a substring match
            search_input = page.locator("input[placeholder*='create today']")

            if search_input.is_visible():
                print("Search input is visible.")

                # 3. Test Interaction
                print("Testing search interaction...")
                search_input.fill("chatgpt")

                # Click the search button (it is a button type=submit inside the form)
                # It has text "Search"
                search_button = page.locator("button:has-text('Search')")
                search_button.click()

                # 4. Verify Redirect
                print("Waiting for redirect...")
                page.wait_for_url("**/tools?search=chatgpt")
                print("Redirect successful: " + page.url)
            else:
                print("Error: Search input is NOT visible.")
                # Debug: print all inputs found
                print("Debug: Inputs found on page:")
                for i, inp in enumerate(page.locator("input").all()):
                    print(f"Input {i}: placeholder='{inp.get_attribute('placeholder')}'")
                sys.exit(1)

        except Exception as e:
            print(f"Verification failed: {e}")
            sys.exit(1)
        finally:
            browser.close()

if __name__ == "__main__":
    verify_mobile()
