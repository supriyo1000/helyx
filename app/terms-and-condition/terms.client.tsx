// app\terms_and_condition\page.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
// import Navigation from "@/components/features/navigation";
import NavigationLatest from "@/components/features/navigationlatest";
// import TestNavigation from "@/components/test";

export default function TermsClient() {

    const date: Date = new Date(); // TypeScript infers `Date`

    const termsContent = [
        {
            id: "introduction",
            title: "1. Introduction",
            content: (
                <>
                    <p className="text-gray-700 leading-relaxed">
                        Welcome to Helyx. These Terms & Conditions (“Terms”) govern your
                        access to and use of our website [your domain] (“Website&quot;) and our
                        proprietary software Helyx (“Software&quot;). By accessing the Website,
                        purchasing, downloading, or using the Software, you agree to be
                        bound by these Terms.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-2">
                        If you do not agree, you must not access the Website or use the
                        Software.
                    </p>
                </>
            ),
        },
        {
            id: "definitions",
            title: "2. Definitions",
            content: (
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                    <li>
                        <span className="font-medium text-blue-600">“We”, “Us”, “Our”</span>
                        – refers to the Helyx team/company.
                    </li>
                    <li>
                        <span className="font-medium text-blue-600">“You”, “Your”, “Licensee”</span>
                        – refers to the individual or entity using the Website or Software.
                    </li>
                    <li>
                        <span className="font-medium text-blue-600">“Software”</span> – the
                        Helyx proprietary real-time, heterogeneous database replication
                        application, in object code form.
                    </li>
                    <li>
                        <span className="font-medium text-blue-600">“License”</span> – the
                        rights granted to You under these Terms to use the Software.
                    </li>
                    <li>
                        <span className="font-medium text-blue-600">“Update”</span> – minor
                        bug fixes or patches to existing features.
                    </li>
                    <li>
                        <span className="font-medium text-blue-600">“Upgrade”</span> – new
                        versions with major changes or new features.
                    </li>
                </ul>
            ),
        },
        {
            id: "use-of-the-website",
            title: "3. Use of the Website",
            content: (
                <>
                    <p className="text-gray-700 leading-relaxed">
                        Content on our Website is for information purposes only and may
                        change without notice.
                    </p>

                    <p className="text-gray-700 leading-relaxed mt-2">You may not:</p>

                    <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mt-2">
                        <li>Copy, scrape, or extract content without permission.</li>
                        <li>Introduce malicious code or attempt unauthorized access.</li>
                        <li>Use the Website for unlawful purposes.</li>
                    </ul>
                </>
            ),
        },
        {
            id: "grant-of-software-license",
            title: "4. Grant of Software License",
            content: (
                <>
                    <p className="text-gray-700 leading-relaxed">
                        Upon purchase or trial approval, and subject to full payment of
                        applicable fees, We grant You:
                    </p>

                    <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mt-2">
                        <li>
                            A non-exclusive, non-transferable, revocable license to
                            install and use the Software solely for internal business
                            purposes.
                        </li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed mt-2">License Scope:</p>

                    <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mt-2">
                        <li>Perpetual License – if purchased outright.</li>
                        <li>Subscription License – for a specific term, renewable upon payment.</li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed mt-2">
                        The License is limited to the number of instances/servers specified
                        in your purchase agreement.
                    </p>
                </>
            ),
        },
        {
            id: "restrictions",
            title: "5. Restrictions",
            content: (
                <>
                    <p className="text-gray-700 leading-relaxed">You must not:</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mt-2">
                        <li>Reverse engineer, decompile, or modify the Software.</li>
                        <li>Rent, lease, sublicense, or share the Software with third parties without written consent.</li>
                        <li>Use the Software to create a competing product.</li>
                        <li>Circumvent any licensing or usage restrictions.</li>
                    </ul>
                </>
            ),
        },
        {
            id: "delivery-activation",
            title: "6. Delivery & Activation",
            content: (
                <>
                    <p className="text-gray-700 leading-relaxed">
                        The Software will be delivered via secure download link or deployment
                        by Us.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-2">
                        License keys or activation files may be required and must not be
                        shared.
                    </p>
                </>
            ),
        },
        {
            id: "support-maintenance",
            title: "7. Support & Maintenance",
            content: (
                <>
                    <p className="text-gray-700 leading-relaxed">
                        If your purchase includes support, we will provide:
                    </p>

                    <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mt-2">
                        <li>Email/phone assistance during business hours.</li>
                        <li>Updates for bug fixes and security patches.</li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed mt-2">Support does not include:</p>

                    <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mt-2">
                        <li>Custom feature development.</li>
                        <li>Issues caused by third-party software or hardware.</li>
                    </ul>
                </>
            ),
        },
        {
            id: "intellectual-property-rights",
            title: "8. Intellectual Property Rights",
            content: (
                <>
                    <p className="text-gray-700 leading-relaxed">
                        All rights, title, and interest in the Software, Website,
                        documentation, and related materials remain with Us.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-2">
                        You acquire no ownership rights beyond the license granted.
                    </p>
                </>
            ),
        },
        {
            id: "license-compliance-audits",
            title: "9. License Compliance & Audits",
            content: (
                <p className="text-gray-700 leading-relaxed">
                    We reserve the right to verify license compliance. You agree to
                    provide reasonable assistance in such audits.
                </p>
            ),
        },
        {
            id: "payment-terms",
            title: "10. Payment Terms",
            content: (
                <>
                    <p className="text-gray-700 leading-relaxed">All fees are due as per the agreed payment schedule.</p>
                    <p className="text-gray-700 leading-relaxed mt-2">Late payments may incur interest charges.</p>
                    <p className="text-gray-700 leading-relaxed mt-2">Fees are non-refundable except where required by law.</p>
                </>
            ),
        },
        {
            id: "warranty-disclaimer",
            title: "11. Warranty Disclaimer",
            content: (
                <p className="text-gray-700 leading-relaxed">
                    The Software is provided “AS IS” without warranties of any kind, except
                    as expressly stated in writing. We do not warrant that the Software
                    will be error-free, uninterrupted, or compatible with all
                    environments.
                </p>
            ),
        },
        {
            id: "limitation-of-liability",
            title: "12. Limitation of Liability",
            content: (
                <>
                    <p className="text-gray-700 leading-relaxed">To the maximum extent permitted by law:</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mt-2">
                        <li>Our liability for any claim is limited to the amount paid by You for the Software in the last 12 months.</li>
                        <li>We are not liable for indirect, incidental, special, or consequential damages, including data loss or business interruption.</li>
                    </ul>
                </>
            ),
        },
        {
            id: "termination",
            title: "13. Termination",
            content: (
                <>
                    <p className="text-gray-700 leading-relaxed">We may terminate your license immediately if you:</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mt-2">
                        <li>Breach these Terms.</li>
                        <li>Fail to pay applicable fees.</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-2">Upon termination, you must uninstall and destroy all copies of the Software.</p>
                </>
            ),
        },
        {
            id: "export-control",
            title: "14. Export Control",
            content: (
                <p className="text-gray-700 leading-relaxed">
                    You agree to comply with all applicable export laws and regulations regarding Software usage.
                </p>
            ),
        },
        {
            id: "governing-law-dispute-resolution",
            title: "15. Governing Law & Dispute Resolution",
            content: (
                <>
                    <p className="text-gray-700 leading-relaxed">These Terms shall be governed by the laws of India.</p>
                    <p className="text-gray-700 leading-relaxed mt-2">Exclusive jurisdiction shall lie with the courts of Kolkata, West Bengal.</p>
                </>
            ),
        },
        {
            id: "force-majeure",
            title: "16. Force Majeure",
            content: (
                <p className="text-gray-700 leading-relaxed">
                    We are not responsible for delays or failures caused by events beyond our reasonable control.
                </p>
            ),
        },
        {
            id: "changes-to-terms",
            title: "17. Changes to Terms",
            content: (
                <p className="text-gray-700 leading-relaxed">
                    We may update these Terms at any time. Changes will be effective from the date posted on our Website.
                </p>
            ),
        },
        {
            id: "trial-license",
            title: "*Trial*: Evaluation / Trial License",
            content: (
                <>
                    <p className="text-gray-700 leading-relaxed">
                        If You have obtained the Software for evaluation or trial purposes
                        (“Trial License”), the following additional terms apply:
                    </p>

                    <h4 className="font-semibold text-gray-800 mt-4">Automatic Expiry Enforcement</h4>
                    <p className="text-gray-700 leading-relaxed mt-2">
                        The Trial License is subject to technical controls designed to
                        automatically disable the Software upon expiry of the Trial Period.
                        These controls are integral to the Software and may cause the
                        Software to cease functioning without further notice. You
                        acknowledge and agree that any attempt to disable, tamper with, or
                        bypass these controls constitutes a material breach of this
                        Agreement and will result in immediate termination of the License,
                        as well as possible legal action.
                    </p>

                    <div className="mt-4">
                        <p className="text-gray-700 leading-relaxed font-medium">License Scope:</p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mt-2">
                            <li>You are granted a non-exclusive, non-transferable, limited license to install and use the Software solely for internal evaluation purposes.</li>
                            <li>The Trial License is not for production, commercial, or revenue-generating use.</li>
                        </ul>

                        <p className="text-gray-700 leading-relaxed mt-3">Term & Expiry:</p>
                        <p className="text-gray-700 leading-relaxed mt-1">The Trial License is valid for 30 days from the date of activation (the “Trial Period&quot;). Upon expiry, the Software will automatically disable or require activation of a paid license. You must uninstall and delete all copies of the Software at the end of the Trial Period unless you purchase a full license.</p>

                        <p className="text-gray-700 leading-relaxed mt-3">Restrictions:</p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mt-2">
                            <li>Use the Software in any live production environment.</li>
                            <li>Modify, reverse engineer, decompile, or attempt to bypass licensing controls.</li>
                            <li>Disclose or publish any performance results or benchmarks without our written consent.</li>
                            <li>Share the Trial License key or Software with any third party.</li>
                        </ul>

                        <p className="text-gray-700 leading-relaxed mt-3">Ownership:</p>
                        <p className="text-gray-700 leading-relaxed mt-1">All rights, title, and interest in the Software remain with Us. The Trial License does not transfer any ownership rights.</p>

                        <p className="text-gray-700 leading-relaxed mt-3">No Warranty & Limitation of Liability:</p>
                        <p className="text-gray-700 leading-relaxed mt-1">The Software is provided “AS IS” during the Trial Period, with no warranties of any kind. To the fullest extent permitted by law, We shall have no liability for any damages, losses, or claims arising from Your use of the Software under the Trial License.</p>

                        <p className="text-gray-700 leading-relaxed mt-3">Conversion to Full License:</p>
                        <p className="text-gray-700 leading-relaxed mt-1">You may purchase a full license at any time during or after the Trial Period. Upon purchase, the Terms for the paid license will apply.</p>
                    </div>
                </>
            ),
        },
    ];

    return (
        <div className="scroll-smooth bg-gradient-to-br from-blue-50 to-white min-h-screen">
            <div className="relative z-50 isolate flex items-center gap-x-6 overflow-hidden bg-white border-b border-gray-200 px-6 py-2.5 sm:px-3.5">
                <div className="flex w-full items-center justify-between md:justify-center gap-x-3">
                    <a
                        className="text-sm flex items-center sm:text-[0.93rem] text-gray-900 hover:opacity-80 transition-opacity"
                        href="https://heroui.chat"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="mr-1" role="img" aria-label="rocket">
                            🚀
                        </span>
                        <span className="font-medium">One Engine. Many Databases. Real-Time-Replication.</span>
                    </a>

                </div>
            </div>
            <NavigationLatest/>
            {/* <TestNavigation/> */}
            <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-14 shadow-lg">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-2xl lg:text-5xl font-bold tracking-tight mb-3">Terms & Conditions</h1>
                    <p className="text-blue-100 text-sm lg:text-lg">Please read these terms carefully before using our software or website.</p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 flex gap-10">
                <aside className="hidden lg:block w-1/4 sticky top-24 self-start">
                    <div className="bg-white shadow-lg rounded-xl border border-blue-100 p-4">
                        <h2 className="text-blue-700 font-semibold mb-3">Jump to</h2>
                        <ul className="space-y-2 text-sm">
                            {termsContent.map((sec) => (
                                <li key={sec.id}>
                                    <a href={`#${sec.id}`} className="text-gray-600 hover:text-blue-700 transition">
                                        {sec.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                <main className="flex-1 max-w-3xl">
                    <motion.div className="bg-white shadow-xl rounded-2xl p-8 border border-blue-100 backdrop-blur-sm mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="flex flex-wrap gap-4 mb-6">
                            <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">Effective: {date.getFullYear()}</span>
                            <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full">Last Updated: {date.getFullYear()}</span>
                        </div>

                        {termsContent.slice(0, -1).map((sec) => (
                            <section id={sec.id} key={sec.id} className="mb-8 border-l-4 border-blue-500 pl-4">
                                <h2 className="text-lg lg:text-2xl font-semibold text-blue-700 mb-3">{sec.title}</h2>
                                <div className="text-sm lg:text-md">{sec.content}</div>
                            </section>
                        ))}
                    </motion.div>

                    {/* Trial special card */}
                    <motion.div id={termsContent[termsContent.length - 1].id} className="bg-gradient-to-br from-yellow-50 to-white shadow-lg rounded-2xl p-8 border border-yellow-200" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                        <h2 className="text-sm lg:text-2xl font-semibold text-yellow-800 mb-4">{termsContent[termsContent.length - 1].title}</h2>
                        <div>{termsContent[termsContent.length - 1].content}</div>
                    </motion.div>
                </main>
            </div>
        </div>
    );
}
