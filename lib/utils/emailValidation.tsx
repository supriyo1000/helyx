// List of blocked consumer email domains
const BLOCKED_DOMAINS = [
    // Major consumer email providers
    "gmail.com",
    "googlemail.com",
    "google.com",
    "yahoo.com",
    "yahoo.co.uk",
    "yahoo.ca",
    "yahoo.com.au",
    "yahoo.fr",
    "yahoo.de",
    "yahoo.it",
    "yahoo.es",
    "yahoo.co.jp",
    "yahoo.co.in",
    "ymail.com",
    "rocketmail.com",
    "hotmail.com",
    "hotmail.co.uk",
    "hotmail.fr",
    "hotmail.de",
    "hotmail.it",
    "hotmail.es",
    "hotmail.ca",
    "hotmail.com.au",
    "outlook.com",
    "outlook.co.uk",
    "outlook.fr",
    "outlook.de",
    "outlook.it",
    "outlook.es",
    "outlook.ca",
    "outlook.com.au",
    "live.com",
    "live.co.uk",
    "live.fr",
    "live.de",
    "live.it",
    "live.es",
    "live.ca",
    "live.com.au",
    "msn.com",
    "msn.co.uk",
    "msn.fr",
    "msn.de",
    "msn.it",
    "msn.es",
    "msn.ca",

    // Indian email providers
    "rediffmail.com",
    "rediff.com",
    "sify.com",
    "in.com",
    "indiatimes.com",
    "vsnl.com",
    "vsnl.net",
    "sancharnet.in",
    "dataone.in",
    "eth.net",
    "mantraonline.com",
    "touchtelindia.net",

    // Other major providers
    "aol.com",
    "aol.co.uk",
    "aol.fr",
    "aol.de",
    "aol.it",
    "aol.es",
    "aol.ca",
    "aol.com.au",
    "icloud.com",
    "me.com",
    "mac.com",
    "protonmail.com",
    "proton.me",
    "tutanota.com",
    "tutanota.de",
    "zoho.com",
    "zohomail.com",
    "mail.com",
    "email.com",
    "gmx.com",
    "gmx.de",
    "gmx.net",
    "gmx.at",
    "gmx.ch",
    "web.de",
    "t-online.de",
    "freenet.de",
    "yandex.com",
    "yandex.ru",
    "ya.ru",
    "mail.ru",
    "inbox.ru",
    "list.ru",
    "bk.ru",
    "rambler.ru",
    "qq.com",
    "163.com",
    "126.com",
    "sina.com",
    "sohu.com",
    "naver.com",
    "hanmail.net",
    "daum.net",
    "libero.it",
    "virgilio.it",
    "alice.it",
    "tin.it",
    "orange.fr",
    "wanadoo.fr",
    "free.fr",
    "laposte.net",
    "terra.com.br",
    "uol.com.br",
    "bol.com.br",
    "ig.com.br",
    "telenet.be",
    "skynet.be",
    "pandora.be",
    "bluewin.ch",
    "sunrise.ch",
    "tiscali.it",
    "tiscali.co.uk",
    "tiscali.fr",
    "tiscali.de",
    "btinternet.com",
    "btopenworld.com",
    "bt.com",
    "ntlworld.com",
    "virgin.net",
    "virginmedia.com",
    "sky.com",
    "talk21.com",
    "tesco.net",
    "o2.co.uk",
    "orange.co.uk",
    "ee.co.uk",
    "telus.net",
    "shaw.ca",
    "rogers.com",
    "sympatico.ca",
    "optusnet.com.au",
    "bigpond.com",
    "bigpond.net.au",
    "tpg.com.au",
    "xtra.co.nz",
    "clear.net.nz",
    "paradise.net.nz",

    // Disposable/temporary email providers
    "10minutemail.com",
    "10minutemail.net",
    "10minutemail.org",
    "tempmail.org",
    "temp-mail.org",
    "temporary-mail.net",
    "guerrillamail.com",
    "guerrillamail.net",
    "guerrillamail.org",
    "mailinator.com",
    "mailinator.net",
    "mailinator.org",
    "throwaway.email",
    "throwawaymail.com",
    "getnada.com",
    "getairmail.com",
    "maildrop.cc",
    "mailnesia.com",
    "yopmail.com",
    "yopmail.fr",
    "yopmail.net",
    "sharklasers.com",
    "grr.la",
    "guerrillamailblock.com",
    "pokemail.net",
    "spam4.me",
    "bccto.me",
    "mailcatch.com",
    "maildu.de",
    "rcpt.at",
    "trashmail.com",
    "trashmail.net",
    "trashmail.org",
    "dispostable.com",
    "fakeinbox.com",
    "spamgourmet.com",
    "mytrashmail.com",
    "tempinbox.com",
    "tempr.email",
    "mohmal.com",
    "emailondeck.com",
    "emailtemporanea.com",
    "correotemporal.org",
    "tempail.com",
    "tempemail.com",
    "minuteinbox.com",
    "emailfake.com",
    "fakemailgenerator.com",
    "disposableemailaddresses.com",
    "disposeamail.com",
    "disposable.com",
    "spambox.us",
    "spamhole.com",
    "spamfree24.org",
    "anonymbox.com",
    "anonymousemail.me",
    "hidemail.de",
    "incognitomail.org",
    "mytempemail.com",
    "no-spam.ws",
    "nospam.ze.tc",
    "nowmymail.com",
    "objectmail.com",
    "proxymail.eu",
    "quickinbox.com",
    "safetymail.info",
    "sneakemail.com",
    "sogetthis.com",
    "soodonims.com",
    "tagyourself.com",
    "talkinator.com",
    "twinmail.de",
    "wegwerfmail.de",
    "wegwerfemail.de",
    "wh4f.org",
    "whyspam.me",
    "willselfdestruct.com",
    "xemaps.com",
    "xmaily.com",
    "zoemail.org",
    "zoemail.net",

    // Additional international providers
    "seznam.cz",
    "centrum.cz",
    "atlas.cz",
    "wp.pl",
    "onet.pl",
    "interia.pl",
    "gazeta.pl",
    "freemail.hu",
    "citromail.hu",
    "indamail.hu",
    "abv.bg",
    "mail.bg",
    "dir.bg",
    "inbox.lv",
    "mail.lv",
    "apollo.lv",
    "delfi.lt",
    "zebra.lt",
    "takas.lt",
    "mail.ee",
    "hot.ee",
    "zone.ee",
    "enet.gr",
    "otenet.gr",
    "forthnet.gr",
    "iol.pt",
    "sapo.pt",
    "clix.pt",
    "correo.es",
    "ya.com",
    "eresmas.com",
    "mixmail.com",
    "lycos.com",
    "lycos.co.uk",
    "excite.com",
    "excite.co.uk",
    "excite.fr",
    "netscape.net",
    "netscape.com",
    "juno.com",
    "netzero.net",
    "netzero.com",
    "earthlink.net",
    "mindspring.com",
    "comcast.net",
    "comcast.com",
    "verizon.net",
    "verizon.com",
    "att.net",
    "att.com",
    "sbcglobal.net",
    "bellsouth.net",
    "charter.net",
    "cox.net",
    "roadrunner.com",
    "rr.com",
    "optonline.net",
    "optimum.net",
    "cablevision.com",
    "twc.com",
    "windstream.net",
    "centurylink.net",
    "frontier.com",
    "frontiernet.net",
]

// Additional patterns to check for suspicious domains
const SUSPICIOUS_PATTERNS = [
    /^\d+mail/i, // Domains starting with numbers + mail
    /mail\d+/i, // Domains with mail + numbers
    /temp/i, // Domains containing 'temp'
    /fake/i, // Domains containing 'fake'
    /spam/i, // Domains containing 'spam'
    /trash/i, // Domains containing 'trash'
    /disposable/i, // Domains containing 'disposable'
    /throwaway/i, // Domains containing 'throwaway'
    /guerrilla/i, // Domains containing 'guerrilla'
    /mailinator/i, // Domains containing 'mailinator'
    /^.{1,2}\./, // Very short domain names (1-2 chars)
    /\d{4,}/, // Domains with 4+ consecutive numbers
]

export interface EmailValidationResult {
    isValid: boolean
    error?: string
}

export function validateCompanyEmail(email: string): EmailValidationResult {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        return {
            isValid: false,
            error: "Please enter a valid email address",
        }
    }

    // Extract domain
    const domain = email.split("@")[1]?.toLowerCase()
    if (!domain) {
        return {
            isValid: false,
            error: "Invalid email format",
        }
    }

    // Check if domain is in blocked list
    if (BLOCKED_DOMAINS.includes(domain)) {
        return {
            isValid: false,
            error: `${domain} is not allowed. Please use your company email address.`,
        }
    }

    // Check for suspicious patterns
    for (const pattern of SUSPICIOUS_PATTERNS) {
        if (pattern.test(domain)) {
            return {
                isValid: false,
                error: "This email domain is not allowed. Please use your company email address.",
            }
        }
    }

    // Check domain length (too short domains are suspicious)
    if (domain.length < 4) {
        return {
            isValid: false,
            error: "Please use a valid company email address",
        }
    }

    // Check if domain has valid TLD
    const tldRegex = /\.[a-z]{2,}$/i
    if (!tldRegex.test(domain)) {
        return {
            isValid: false,
            error: "Please enter a valid email address with a proper domain",
        }
    }

    return {
        isValid: true,
    }
}

export function getCompanyEmailSuggestion(): string {
    return "Use your work email address (e.g., yourname@yourcompany.com)"
}

export function isConsumerEmail(email: string): boolean {
    const domain = email.split("@")[1]?.toLowerCase()
    return domain ? BLOCKED_DOMAINS.includes(domain) : false
}
