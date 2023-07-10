import { test, expect } from "@playwright/test"
import { RariRunner } from "./rari-runner"

test("has title", async ({ page }) => {
  // Comment this one to restore launch functionality
  new RariRunner().say()
  await page.goto("https://playwright.dev/")

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/)
})
