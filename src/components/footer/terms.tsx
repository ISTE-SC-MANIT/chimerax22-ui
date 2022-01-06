import React from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Link, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Theme } from '@mui/material/styles';
import {makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
    body: {
        fontFamily: 'Nunito',
        height: '100vh',
        textAlign: 'justify',
    },

    title: {
        fontFamily: 'Nunito',
        fontWeight: 600,
        textAlign: 'center',
        marginTop: theme.spacing(2),
    },
    link: {
        cursor: 'pointer',
    },
}));

interface Props {
    openDialog: boolean;
    onClose: () => void;
}
const ScrollDialog: React.FC<Props> = ({ openDialog, onClose }) => {
    const classes = useStyles();
    const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

    const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
        setScroll(scrollType);
    };

    const handleClose = () => {
        onClose();
    };


    return (
        <div>
            <Dialog
                open={openDialog}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby='scroll-dialog-title'
                aria-describedby='scroll-dialog-description'
            >
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText className={classes.body}>
                        <Typography variant='h6' className={classes.title}>
                            <b>TERMS AND CONDITIONS</b>
                        </Typography>
                        <br /> This website is operated by the{' '}
                        <b>
                            Indian Society for Technical Education Students’ Chapter MANIT
                            (ISTE SC MANIT)
                        </b>
                        . The terms “we”, “us”, and “our” refer to ISTE SC MANIT throughout
                        this site. ISTE SC MANIT offers this website to the user,
                        conditioned upon your acceptance of all terms, conditions, policies,
                        and notices stated here. By visiting our site or using any part of
                        our site, you are agreeing to the following terms and conditions
                        (“Terms of Service”, “Terms”). These terms and conditions apply to
                        all users of this site including without limitation users. If you do
                        not agree with anything in the terms and conditions then you may not
                        access the website. We reserve the right to update, change, or
                        replace any part of these terms and conditions by posting any
                        updates and/or changes to our website. You may review the most
                        current version of the terms and conditions any time you want. If
                        you use this site after any changes in the terms and conditions, it
                        constitutes acceptance of those changes. <br />{' '}
                        <Typography className={classes.title} variant='h6'>
                            SECTION 1 – GENERAL CONDITIONS
                        </Typography>
                        <br /> We reserve the right to refuse service to anyone for any
                        reason at any time. Your content except credit card information may
                        be transferred unencrypted and involve (a) transmissions over
                        various networks, and (b) changes to conform and adapt to technical
                        requirements of connecting networks or devices. Credit card
                        information is always encrypted during transfer over networks. You
                        agree not to reproduce, duplicate, copy, sell, resell, or exploit
                        any portion on the website or any contact on the website through
                        which the service is provided, without express permission by us.{' '}
                        <br />{' '}
                        <Typography className={classes.title} variant='h6'>
                            SECTION 2 - ACCURACY, COMPLETENESS, AND TIMELINESS OF INFORMATION
                        </Typography>
                        <br /> We are not responsible if information made available on this
                        site is not accurate, complete, or current. The material on this
                        site is provided for general information only and should not be
                        relied upon or used as the sole basis for making decisions without
                        consulting primary, more accurate, more complete, or timelier
                        sources of information. Any reliance on the material on this site is
                        at your own risk.
                        <br />{' '}
                        <Typography className={classes.title} variant='h6'>
                            SECTION 3 - MODIFICATIONS TO THE SERVICE AND PRICES
                        </Typography>
                        <br /> Prices are subject to change without notice. We reserve the
                        right at any time to modify or discontinue anything on our site. We
                        shall not be liable to you or any third-party for any modification,
                        price change, suspension, or discontinuance. <br />{' '}
                        <Typography className={classes.title} variant='h6'>
                            SECTION 4 – ACCURACY OF BILLING AND ACCOUNT INFORMATION
                        </Typography>
                        <br />
                        You agree to provide current, complete, and accurate account
                        information for all payments. You agree to promptly update your
                        account and other information, including your email address and
                        credit card numbers and expiration dates so that we can complete
                        your transactions and contact you as needed. <br />{' '}
                        <Typography className={classes.title} variant='h6'>
                            SECTION 5 - OPTIONAL TOOLS
                        </Typography>
                        <br /> We may provide you with access to third-party tools over
                        which we neither monitor nor have any control nor input. You
                        acknowledge and agree that we provide access to such tools “as is”
                        and “as available” without any warranties, representations, or
                        conditions of any kind and any endorsement. We shall have no
                        liability whatsoever arising from or relating to your use of
                        optional third-party tools. Any use by you of optional tools offered
                        through the site is entirely at your own risk and discretion and you
                        should ensure that you are familiar with and approve of the terms on
                        which tools are provided by the relevant third-party provider(s). We
                        may also, in the future add any new information through the website.
                        Everything included in the site even after changes shall also be
                        subject to these Terms of Service. <br />{' '}
                        <Typography className={classes.title} variant='h6'>
                            SECTION 6 - THIRD-PARTY LINKS
                        </Typography>
                        <br /> Certain content available on our site may include materials
                        from third-parties. Third-party links on this site may direct you to
                        third-party websites that are not affiliated with us. We are not
                        responsible for examining or evaluating the content or accuracy and
                        we do not warrant and will not have any liability or responsibility
                        for any third-party materials or websites, or any other materials or
                        services of third-parties. We are not liable for any harm or damages
                        related to the purchase or use of goods, services, resources,
                        content, or any other transactions made in connection with any
                        third-party websites. Please review carefully the third-party&apos;s
                        policies and practices and make sure you understand them before you
                        engage in any transaction. Complaints, claims, concerns, or
                        questions regarding third-party products should be directed to the
                        third-party. <br />{' '}
                        <Typography className={classes.title} variant='h6'>
                            SECTION 7 - USER COMMENTS, FEEDBACK, AND OTHER SUBMISSIONS
                        </Typography>
                        <br /> If at our request, you send certain specific submissions or
                        without a request from us you send creative ideas, suggestions,
                        proposals, plans, or other materials, whether online, by email, by
                        postal mail, or otherwise (collectively, &apos;comments&apos;), you agree that
                        we may, at any time, without restriction, edit, copy, publish,
                        distribute, translate and otherwise use in any medium any comments
                        that you forward to us. We are and shall be under no obligation (1)
                        to maintain any comments in confidence; (2) to pay compensation for
                        any comments; or (3) to respond to any comments. We may, but have no
                        obligation to, monitor, edit or remove content that we determine in
                        our sole discretion are unlawful, offensive, threatening, libellous,
                        defamatory, pornographic, obscene, or otherwise objectionable or
                        violates any party’s intellectual property or these Terms of
                        Service. You agree that your comments will not violate any rights of
                        any third-party, including copyright, trademark, privacy,
                        personality, or other personal or proprietary rights. You further
                        agree that your comments will not contain libellous or otherwise
                        unlawful, abusive, or obscene material, or contain any computer
                        virus or other malware that could in any way affect the operation of
                        our website. You may not use a false e-mail address, pretend to be
                        someone other than yourself, or otherwise mislead us or
                        third-parties as to the origin of any comments. You are solely
                        responsible for any comments you make and their accuracy. We take no
                        responsibility and assume no liability for any comments posted by
                        you or any third-party. <br />{' '}
                        <Typography className={classes.title} variant='h6'>
                            SECTION 8 - PERSONAL INFORMATION
                        </Typography>
                        <br /> Your submission of personal information is governed by our
                        Privacy Policy. <br />{' '}
                        <Typography className={classes.title} variant='h6'>
                            SECTION 9 - ERRORS, INACCURACIES, AND OMISSIONS
                        </Typography>
                        <br />
                        Occasionally there may be information on our site that contains
                        typographical errors, inaccuracies, or omissions that may relate to
                        the descriptions and pricing. We reserve the right to correct any
                        errors, inaccuracies, or omissions, and to change or update
                        information or cancel orders if any information on the website is
                        inaccurate at any time without prior notice (including after you
                        have submitted your order). We undertake no obligation to update,
                        amend, or clarify information on the website, including without
                        limitation, pricing information, except as required by law. No
                        specified update or refresh date applied on the website should be
                        taken to indicate that all information on the website has been
                        modified or updated. <br />{' '}
                        <Typography className={classes.title} variant='h6'>
                            SECTION 10 - PROHIBITED USES
                        </Typography>
                        <br /> In addition to other prohibitions as set forth in the Terms
                        of Service, you are prohibited from using the site or its content:
                        (a) for any unlawful purpose; (b) to solicit others to perform or
                        participate in any unlawful acts; (c) to violate any international,
                        federal, provincial or state regulations, rules, laws, or local
                        ordinances; (d) to infringe upon or violate our intellectual
                        property rights or the intellectual property rights of others; (e)
                        to harass, abuse, insult, harm, defame, slander, disparage,
                        intimidate, or discriminate based on gender, sexual orientation,
                        religion, ethnicity, race, age, national origin, or disability; (f)
                        to submit false or misleading information; (g) to upload or transmit
                        viruses or any other type of malicious code that will or may be used
                        in any way that will affect the functionality or of any related
                        website, other websites, or the Internet; (h) to collect or track
                        the personal information of others; (i) to spam, phish, pharm,
                        pretext, spider, crawl, or scrape; (j) for any obscene or immoral
                        purpose; or (k) to interfere with or circumvent the security
                        features of the website, other websites, or the Internet. We reserve
                        the right to terminate your use of the website for violating any of
                        the prohibited uses. <br />{' '}
                        <Typography className={classes.title} variant='h6'>
                            SECTION 11 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY
                        </Typography>
                        <br /> We do not guarantee, represent, or warrant that your use of
                        our website will be uninterrupted, timely, secure, or error-free. We
                        do not warrant that the results that may be obtained from the use of
                        the website will be accurate or reliable. You agree that from time
                        to time we may remove the website for indefinite periods, without
                        notice to you. You expressly agree that your use of, or inability to
                        use, the website is at your sole risk. The website delivered to you
                        are (except as expressly stated by us) provided &apos;as is&apos; and &apos;as
                        available&apos; for your use, without any representation, warranties or
                        conditions of any kind, either express or implied, including all
                        implied warranties or conditions of merchantability, merchantable
                        quality, fitness for a particular purpose, durability, title, and
                        non-infringement. In no case shall ISTE SC MANIT, our executives, or
                        licensors be liable for any injury, loss, claim, or any direct,
                        indirect, incidental, punitive, special, or consequential damages of
                        any kind, including, without limitation lost profits, lost revenue,
                        lost savings, loss of data, replacement costs, or any similar
                        damages, whether based in contract, tort (including negligence),
                        strict liability or otherwise, arising from you using the service,
                        or for any other claim related in any way to your use of the
                        website, including, but not limited to, any errors or omissions in
                        any content or any loss or damage of any kind incurred as a result
                        of the use of the website or any content posted, transmitted, or
                        otherwise made available, even if advised of their possibility.
                        Because some states or jurisdictions do not allow the exclusion or
                        the limitation of liability for consequential or incidental damages,
                        in such states or jurisdictions, our liability shall be limited to
                        the maximum extent permitted by law. <br />{' '}
                        <Typography className={classes.title} variant='h6'>
                            SECTION 12 – INDEMNIFICATION{' '}
                        </Typography>
                        <br />
                        You agree to indemnify, defend and hold ISTE SC MANIT harmless and
                        our parent, subsidiaries, affiliates, partners, officers, directors,
                        agents, contractors, licensors, service providers, subcontractors,
                        suppliers, interns, and employees, harmless from any claim or
                        demand, including reasonable attorneys’ fees, made by any third
                        party due to or arising out of your breach of these Terms of Service
                        or the documents they incorporate by reference or your violation of
                        any law or the rights of a third-party. <br />{' '}
                        <Typography className={classes.title} variant='h6'>
                            SECTION 13 – SEVERABILITY
                        </Typography>
                        <br /> If any provision of these Terms of Service is determined to
                        be unlawful, void, or unenforceable, such provision shall
                        nonetheless be enforceable to the fullest extent permitted by
                        applicable law, and the unenforceable portion shall be deemed to be
                        severed from these Terms of Service, such determination shall not
                        affect the validity and enforceability of any other remaining
                        provisions.
                        <br />{' '}
                        <Typography className={classes.title} variant='h6'>
                            SECTION 14 – TERMINATION
                        </Typography>
                        <br /> The obligations and liabilities of the parties incurred
                        before the termination date shall survive the termination of this
                        agreement for all purposes. These Terms of Service are effective
                        unless and until terminated by either you or us. You may terminate
                        these Terms of Service at any time by notifying us that you no
                        longer wish to use our site. If in our sole judgment you fail, or we
                        suspect that you have failed, to comply with any term or provision
                        of these Terms of Service, we also may terminate this agreement at
                        any time without notice and you will remain liable for all amounts
                        due up to and including the date of termination; and/or accordingly
                        may deny you access to our website (or any part thereof). <br />{' '}
                        <Typography className={classes.title} variant='h6'>
                            SECTION 15 - ENTIRE AGREEMENT
                        </Typography>
                        <br /> The failure of us to exercise or enforce any right or
                        provision of these Terms of Service shall not constitute a waiver of
                        such right or provision. These Terms of Service and any policies or
                        operating rules posted by us on this site constitute the entire
                        agreement and understanding between you and us and govern your use
                        on the website, superseding any prior or contemporaneous agreements,
                        communications, and proposals, whether oral or written, between you
                        and us (including, but not limited to, any prior versions of the
                        Terms of Service). Any ambiguities in the interpretation of these
                        Terms of Service shall not be construed against the drafting party.{' '}
                        <br />{' '}
                        <Typography className={classes.title} variant='h6'>
                            SECTION 16 - GOVERNING LAW
                        </Typography>
                        <br /> These Terms of Service and any separate agreements shall be
                        governed by and construed following the laws of India and
                        jurisdiction of Bhopal, Madhya Pradesh <br />{' '}
                        <Typography className={classes.title} variant='h6'>
                            SECTION 17 - CHANGES TO TERMS OF SERVICE
                        </Typography>
                        <br /> You can review the most current version of the Terms of
                        Service at any time at this page. We reserve the right, at our sole
                        discretion, to update, change, or replace any part of these Terms of
                        Service by posting updates and changes to our website. It is your
                        responsibility to check our website periodically for changes. Your
                        continued use or access to our website following the posting of any
                        changes to these Terms of Service constitutes acceptance of those
                        changes. <br />{' '}
                        <Typography className={classes.title} variant='h6'>
                            SECTION 18 - CONTACT INFORMATION
                        </Typography>
                        <br /> Questions about the Terms of Service should be sent to us at{' '}
                        <Link className={classes.link}>istescmanit@gmail.com</Link>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='primary'>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default ScrollDialog;