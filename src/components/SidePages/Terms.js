import { useEffect } from "react";

function Terms() {

    useEffect(() => {
        document.title = `Terms and Conditions | SkinNaturals`;
        document.querySelector('meta[name="description"]').setAttribute("content", `Terms and Conditions`);
    }, []);

    return (
        <>
            <section className="p-4 m-4 p-md-5 d-flex justify-content-center">

                <div className="statement">
                    <div className="mb-5">
                        <h1 className="mb-4 fs-4">Terms and Conditions</h1>
                        <p className="mb-3">Our Terms and Conditions were last updated on 11/3/2023. Please read these terms and
                            conditions carefully before using Our Service.</p>
                    </div>

                    <hr className="w-75 mx-auto my-5" />    <div className="mb-5">
                        <h2 className="mb-4 fs-4">Acknowledgment</h2>
                        <p className="mb-3">These are the Terms and Conditions governing the use of this Service and the agreement
                            that
                            operates
                            between You and the Company. These Terms and Conditions set out the rights and obligations of all
                            users
                            regarding the use of the Service.</p>
                        <p className="mb-3"> Your access to and use of the Service is conditioned on Your acceptance of and
                            compliance
                            with these
                            Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access
                            or
                            use the Service.</p>
                        <p className="mb-3">By accessing or using the Service You agree to be bound by these Terms and Conditions.
                            If
                            You disagree
                            with any part of these Terms and Conditions then You may not access the Service.</p>
                        <p className="mb-3">You represent that you are over the age of 18. The Company does not permit those under
                            18 to
                            use the
                            Service.</p>
                        <p className="mb-3">Your access to and use of the Service is also conditioned on Your acceptance of and
                            compliance with the
                            Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the
                            collection, use and disclosure of Your personal information when You use the Application or the
                            Website
                            and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy
                            carefully before using Our Service.</p>
                    </div>

                    <hr className="w-75 mx-auto my-5" />    <div className="mb-5">
                        <h2 className="mb-4 fs-4">User Accounts</h2>
                        <p className="mb-3">When You create an account with Us, You must provide Us information that is accurate,
                            complete, and
                            current at all times. Failure to do so constitutes a breach of the Terms, which may result in
                            immediate
                            termination of Your account on Our Service.</p>
                        <p className="mb-3">You are responsible for safeguarding the password that You use to access the Service and
                            for
                            any
                            activities or actions under Your password, whether Your password is with Our Service or a
                            Third-Party
                            Social Media Service.</p>
                        <p className="mb-3">You agree not to disclose Your password to any third party. You must notify Us
                            immediately
                            upon becoming
                            aware of any breach of security or unauthorized use of Your account.</p>
                        <p className="mb-3">You may not use as a username the name of another person or entity or that is not
                            lawfully
                            available for
                            use, a name or trademark that is subject to any rights of another person or entity other than You
                            without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.</p>

                    </div>

                    <hr className="w-75 mx-auto my-5" />    <div className="mb-5">
                        <h2 className="mb-4 fs-4">Content Restrictions</h2>
                        <p className="mb-3">The Company is not responsible for the content of the Service's users. You expressly
                            understand and agree
                            that You are solely responsible for the Content and for all activity that occurs under your account,
                            whether done so by You or any third person using Your account.</p>
                        <p className="mb-3">You may not transmit any Content that is unlawful, offensive, upsetting, intended to
                            disgust,
                            threatening, libelous, defamatory, obscene or otherwise objectionable. Examples of such
                            objectionable
                            Content include, but are not limited to, the following:</p>
                        <ul>
                            <li>Unlawful or promoting unlawful activity.</li>
                            <li>Defamatory, discriminatory, or mean-spirited content, including references or commentary about
                                religion, race, sexual orientation, gender, national/ethnic origin, or other targeted groups.
                            </li>
                            <li>Spam, machine – or randomly – generated, constituting unauthorized or unsolicited advertising,
                                chain
                                letters, any other form of unauthorized solicitation, or any form of lottery or gambling.</li>
                            <li>Containing or installing any viruses, worms, malware, trojan horses, or other content that is
                                designed or intended to disrupt, damage, or limit the functioning of any software, hardware or
                                telecommunications equipment or to damage or obtain unauthorized access to any data or other
                                information of a third person.</li>
                            <li>Infringing on any proprietary rights of any party, including patent, trademark, trade secret,
                                copyright, right of publicity or other rights.</li>
                            <li>Impersonating any person or entity including the Company and its employees or representatives.
                            </li>
                            <li>Violating the privacy of any third person.</li>
                            <li>False information and features.</li>
                        </ul>
                        <p className="mb-3">The Company reserves the right, but not the obligation, to, in its sole discretion,
                            determine whether or
                            not any Content is appropriate and complies with this Terms, refuse or remove this Content. The
                            Company
                            further reserves the right to make formatting and edits and change the manner of any Content. The
                            Company can also limit or revoke the use of the Service if You post such objectionable
                            Content.<br />
                            As the Company cannot control all content posted by users and/or third parties on the Service, you
                            agree
                            to use the Service at your own risk. You understand that by using the Service You may be exposed to
                            content that You may find offensive, indecent, incorrect or objectionable, and You agree that under
                            no
                            circumstances will the Company be liable in any way for any content, including any errors or
                            omissions
                            in any content, or any loss or damage of any kind incurred as a result of your use of any content.
                        </p>

                    </div>

                    <hr className="w-75 mx-auto my-5" />    <div className="mb-5">
                        <h2 className="mb-4 fs-4">Copyright Policy</h2>
                        <h3 className="fs-5">Intellectual Property Infringement</h3>
                        <p className="mb-3">We respect the intellectual property rights of others. It is Our policy to respond to
                            any
                            claim that
                            Content posted on the Service infringes a copyright or other intellectual property infringement of
                            any
                            person.</p>
                        <p className="mb-3">If You are a copyright owner, or authorized on behalf of one, and You believe that the
                            copyrighted work
                            has been copied in a way that constitutes copyright infringement that is taking place through the
                            Service, You must submit Your notice in writing to the attention of our copyright agent via email
                            and include in Your notice a detailed description of the alleged infringement.</p>
                        <p className="mb-3">You may be held accountable for damages (including costs and attorneys' fees) for
                            misrepresenting that
                            any Content is infringing Your copyright.</p>
                    </div>

                    <hr className="w-75 mx-auto my-5" />    <div className="mb-5">
                        <h2 className="mb-4 fs-4">Intellectual Property</h2>
                        <p className="mb-3">The Service and its original content (excluding Content provided by You or other users),
                            features and
                            functionality are and will remain the exclusive property of the Company and its licensors.</p>
                        <p className="mb-3">The Service is protected by copyright, trademark, and other laws of both the Country and
                            foreign
                            countries.</p>
                        <p className="mb-3">Our trademarks and trade dress may not be used in connection with any product or service
                            without the
                            prior written consent of the Company.</p>
                    </div>

                    <hr className="w-75 mx-auto my-5" />    <div className="mb-5">
                        <h2 className="mb-4 fs-4">Links to Other Websites</h2>
                        <p className="mb-3">Our Service may contain links to third-party web sites or services that are not owned or
                            controlled by
                            the Company.</p>
                        <p className="mb-3">The Company has no control over, and assumes no responsibility for, the content, privacy
                            policies, or
                            practices of any third party web sites or services. You further acknowledge and agree that the
                            Company
                            shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged
                            to
                            be caused by or in connection with the use of or reliance on any such content, goods or services
                            available on or through any such web sites or services.</p>
                        <p className="mb-3">We strongly advise You to read the terms and conditions and privacy policies of any
                            third-party web sites
                            or services that You visit.</p>
                    </div>

                    <hr className="w-75 mx-auto my-5" />
                    <div className="mb-5">
                        <h2 className="mb-4 fs-4">Termination</h2>
                        <p className="mb-3">We may terminate or suspend Your Account immediately, without prior notice or liability,
                            for
                            any reason
                            whatsoever, including without limitation if You breach these Terms and Conditions.</p>
                        <p className="mb-3">Upon termination, Your right to use the Service will cease immediately. If You wish to
                            terminate Your
                            Account, You may simply discontinue using the Service.</p>
                    </div>

                    <hr className="w-75 mx-auto my-5" />

                    <div className="mb-5">
                        <h2 className="mb-4 fs-4">Governing Law</h2>
                        <p className="mb-3">The laws of the Country, excluding its conflicts of law rules, shall govern this Terms
                            and
                            Your use of
                            the Service. Your use of the Application may also be subject to other local, state, national, or
                            international laws.</p>
                    </div>

                    <hr className="w-75 mx-auto my-5" />

                    <div className="mb-5">
                        <h2 className="mb-4 fs-4">Disputes Resolution</h2>
                        <p className="mb-3">If You have any concern or dispute about the Service, You agree to first try to resolve
                            the
                            dispute
                            informally by contacting the Company.</p>
                        <h3 className="fs-5">For European Union (EU) Users</h3>
                        <p className="mb-3">If You are a European Union consumer, you will benefit from any mandatory provisions of
                            the
                            law of the
                            country in which you are resident in.</p>

                        <h3 className="fs-5">United States Legal Compliance</h3>
                        <p className="mb-3">You represent and warrant that (i) You are not located in a country that is subject to
                            the
                            United States
                            government embargo, or that has been designated by the United States government as a "terrorist
                            supporting" country, and (ii) You are not listed on any United States government list of prohibited
                            or
                            restricted parties.</p>

                    </div>

                </div>


            </section>
        </>
    )

};

export default Terms;