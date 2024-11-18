let page;

beforeEach(async () => {
  page = await browser.newPage();
  });

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    await page.setDefaultTimeout(40000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Where the world builds software · GitHub');
  });

  test("The first link attribute", async () => {
    await page.setDefaultTimeout(50000);
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    await page.setDefaultTimeout(60000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Sign up for free")
  });
});


describe("Github new page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/features/codespaces");
  });

  test("The h1 header content'", async () => {
    await page.setDefaultTimeout(40000);
    const secureSelector = "#hero-section-brand-heading";
    await page.waitForSelector(secureSelector, {
      visible: true,
    });
    const actual = await page.$eval(secureSelector, link => link.textContent);
    expect(actual).toContain("Secure development made simple")
  });

  test("The page contains Get started button", async () => {
    await page.setDefaultTimeout(60000);
    const buttonSelector = "div[class='Primer_Brand__Hero-module__Hero-actions___oH1NT'] span[class='Primer_Brand__Text-module__Text___pecHN Primer_Brand__Text-module__Text-font--mona-sans___GpzSG Primer_Brand__Text-module__Text--default___DChoE Primer_Brand__Text-module__Text--200___XAIGT Primer_Brand__Text-module__Text--weight-semibold___Ns19j Primer_Brand__Button-module__Button--label___lUBc0 Primer_Brand__Button-module__Button--label-medium___DW2TM Primer_Brand__Button-module__Button--label-primary___Leisi']";
    await page.waitForSelector(buttonSelector, {
      visible: true,
    });
    const actual = await page.$eval(buttonSelector, link => link.textContent);
    expect(actual).toContain("Get started")
  });

  test("The page contains link Features", async () => {
    await page.setDefaultTimeout(60000);
    const featuresSelector = ".sub-nav-title-link.Link--primary.no-underline.f3-mktg.d-inline-block.text-bold.mr-4";
    await page.waitForSelector(featuresSelector, {
      visible: true,
    });
    const actual = await page.$eval(featuresSelector, link => link.textContent);
    expect(actual).toContain("Features")
  });
});