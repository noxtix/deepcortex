from playwright.sync_api import sync_playwright

def verify_mobile_home(page):
    # Set viewport to mobile size
    page.set_viewport_size({"width": 375, "height": 812}) # iPhone X size

    page.goto("http://localhost:3000")

    # Wait for hydration/hero
    page.wait_for_selector('h1')

    # Screenshot top
    page.screenshot(path="/home/jules/verification/home_mobile.png")

    # Scroll to bottom to check footer
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(1000) # Wait for scroll

    # Check footer text visibility
    footer_text = page.get_by_text("Design & Build by Fluxora Studio")
    if footer_text.is_visible():
        print("Footer is visible on mobile.")
    else:
        print("Footer NOT visible on mobile.")

    page.screenshot(path="/home/jules/verification/home_mobile_footer.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_mobile_home(page)
        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="/home/jules/verification/home_mobile_error.png")
        finally:
            browser.close()
