import React, { useState } from 'react';
// İkonlar
import {
    Twitter, Send, ShieldCheck, Percent, Rocket, Wallet, Users, Copy, Check, Download, Repeat, HelpCircle, FileText, ArrowRightCircle,
    ShoppingCart, BarChart, // Önceki eklenenler
    Globe, Package, Target, Award, Gamepad2 // Yol haritası için eklenenler
} from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
    // --- State for Copy Button ---
    const [isCopied, setIsCopied] = useState(false);
    const contractAddress = "0x1234567890abcdef1234567890abcdef12345678"; // Kontrat adresi

    // --- Style Variables ---
    const boxStyle = "bg-gray-800 p-6 rounded-2xl border border-gold/30 shadow-md text-left transition duration-300";
    const gridBoxStyle = `${boxStyle} hover:scale-[1.03] hover:shadow-gold/20 hover:border-gold flex flex-col`;
    const sectionTitleStyle = "text-3xl md:text-4xl font-bold mb-12 text-center text-gold";
    const subTitleStyle = "font-bold text-xl mb-4 text-gold"; // Alt başlık için alt boşluk artırıldı
    const paragraphStyle = "text-gold/80";
    const listStyle = `list-none space-y-2 ${paragraphStyle}`; // Liste stili
    const listItemStyle = "flex items-start gap-2"; // Liste öğesi stili
    const listIconStyle = "text-gold w-4 h-4 mt-1 flex-shrink-0"; // Liste ikonu stili (altın onay)
    const iconWrapperStyle = "mx-auto mb-4 text-gold";


    // --- Animation Variants ---
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } }
    };

    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    // --- Copy Function ---
    const copyToClipboard = () => {
        navigator.clipboard.writeText(contractAddress).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    };

    // --- Button Styles ---
    const primaryButtonStyle = "bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-500 hover:to-gold text-black px-6 py-3 rounded-full font-semibold shadow-lg transition transform hover:-translate-y-1 hover:scale-105";
    const secondaryButtonStyle = "border-2 border-gold text-gold px-6 py-3 rounded-full font-semibold hover:bg-gold hover:text-black transition transform hover:-translate-y-1 hover:scale-105";

    return (
        // Main Wrapper: Subtle Gradient Background
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-black to-gray-900 text-[#FFD700] font-poppins overflow-hidden"
        >

            {/* Hero Section */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-center py-20 px-4"
            >
                {/* Logo */}
                <motion.img
                    src="/lalafi-logo.png"
                    alt="LALAFI Logo"
                    loading="lazy"
                    className="mx-auto w-32 h-32 rounded-full shadow-lg mb-6 border-4 border-gold"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                />
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gold">🦡 LALAFI TOKEN</h1>
                {/* Description */}
                <p className={`max-w-2xl mx-auto text-lg ${paragraphStyle} mb-6`}>
                    $LALAFI is the fearless MemeFi token on BNB Chain. Join the revolution and ride the wave with us!
                </p>
                {/* Action Buttons */}
                <motion.div
                    className="flex justify-center gap-4 flex-wrap mt-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <a href={`https://pancakeswap.finance/swap?outputCurrency=${contractAddress}`} target="_blank" rel="noopener noreferrer" className={primaryButtonStyle}>Buy $LALAFI 🚀</a>
                    <a href="https://twitter.com/LALAFI_TOKEN" target="_blank" rel="noopener noreferrer" className={secondaryButtonStyle}>Follow on X 🐦</a>
                    <a href="https://t.me/LALAFI_TOKEN" target="_blank" rel="noopener noreferrer" className={secondaryButtonStyle}>Join Telegram ✈️</a>
                </motion.div>

                {/* --- Kontrat Adresi ve Kopyalama Butonu (Hero Bölümü için EKLENDİ) --- */}
                <motion.div
                    className="mt-10 max-w-xl mx-auto" // Üstten boşluk, genişlik sınırı ve ortalama
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }} // Butonlardan biraz sonra gelmesi için küçük gecikme
                >
                    {/* Daha belirgin bir görünüm için arka plan, border ve padding eklendi */}
                    <div className="flex items-center justify-center gap-x-3 gap-y-2 flex-wrap bg-gray-800/70 backdrop-blur-sm p-3 rounded-lg border border-gold/40 shadow-md">
                        {/* Etiket */}
                        <span className="text-sm text-gold/90 whitespace-nowrap font-semibold">
                            Contract (BSC):
                        </span>
                        {/* Adres */}
                        <code className="text-sm text-white bg-black/40 px-2 py-1 rounded break-all select-all">
                            {contractAddress}
                        </code>
                        {/* Kopyalama Butonu */}
                        <button
                            onClick={copyToClipboard}
                            className="p-1.5 bg-gray-700/80 rounded hover:bg-gray-600/90 transition flex-shrink-0" // flex-shrink-0 eklendi
                            aria-label="Copy contract address"
                        >
                            {isCopied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-gold/80" />}
                        </button>
                        {/* BscScan Linki */}
                        <a
                            href={`https://bscscan.com/token/${contractAddress}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="View on BscScan"
                            className="p-1.5 bg-gray-700/80 rounded hover:bg-gray-600/90 transition flex items-center flex-shrink-0" // flex ve flex-shrink-0 eklendi
                        >
                            {/* public klasöründe 'bscscan-logo-light.svg' olduğundan emin olun */}
                            <img src="/bscscan-logo-light.svg" alt="BscScan" className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
                {/* --- Kontrat Adresi Bitiş --- */}

            </motion.section> {/* End Hero Section */}

            {/* Story Section */}
            <motion.section
                className="py-16 px-4 bg-gray-900"
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}
            >
                <h2 className={sectionTitleStyle}>🦡 No Fear. No Limits.</h2>
                <div className={`${boxStyle} max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6`}>
                    <div className="md:w-2/3">
                        <p className={paragraphStyle}>
                            The Legend of the Honey Badger:

                            Honey badgers don’t care. Lions? Cobras? Hyenas? Meh, bring ‘em all. Venom? We sip it like tea. 🐍🦁

                            But let’s talk meme tokens for a second...
                            Dogs everywhere. 🐶 Shiba this, Floki that. Frogs croaking non-stop. 🐸 And don’t get us started on wannabe “next big thing” coins...

                            💥 $LALAFI isn’t here to fetch or ribbit.

                            We tear through the noise. No leash, no lily pads—just pure, unstoppable crypto savagery.

                            In a world full of barking and croaking, the honey badger takes the throne.

                            Suit up. The jungle is ours now. 🦡🔥🚀
                        </p>
                    </div>
                    <div className="md:w-1/3 flex-shrink-0">
                        <motion.img
                            src="/honey-badger.png"
                            alt="Honey Badger"
                            loading="lazy"
                            className="w-full max-w-xs mx-auto rounded-lg border border-gold/50"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>
            </motion.section> {/* End Story Section */}

            {/* Features Section */}
            <motion.section
                className="py-16 px-4"
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
            >
                <h2 className={sectionTitleStyle}>⚙️ Features & Utility</h2>
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <motion.div className={gridBoxStyle} variants={fadeInUp}>
                        <Percent size={40} className={iconWrapperStyle} strokeWidth={1.5} />
                        <div className="flex-grow text-center">
                            <h3 className={subTitleStyle}>💸 Staking</h3>
                            <p className={paragraphStyle}>Earn passive income by staking your $LALAFI tokens.</p>
                        </div>
                    </motion.div>
                    <motion.div className={gridBoxStyle} variants={fadeInUp}>
                        <Wallet size={40} className={iconWrapperStyle} strokeWidth={1.5} />
                        <div className="flex-grow text-center">
                            <h3 className={subTitleStyle}>🎨 NFT Integration</h3>
                            <p className={paragraphStyle}>Exclusive NFT drops & integrations coming soon.</p>
                        </div>
                    </motion.div>
                    <motion.div className={gridBoxStyle} variants={fadeInUp}>
                        <Users size={40} className={iconWrapperStyle} strokeWidth={1.5} />
                        <div className="flex-grow text-center">
                            <h3 className={subTitleStyle}>🌐 DAO Governance</h3>
                            <p className={paragraphStyle}>Community-driven decision making via DAO voting.</p>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section> {/* End Features Section */}

            {/* Tokenomics Section */}
            <motion.section
                className="py-16 px-4 bg-gray-900"
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}
            >
                <h2 className={sectionTitleStyle}>💹 Tokenomics</h2>
                <div className={`${boxStyle} max-w-4xl mx-auto`}>
                    <p className={`${paragraphStyle} mb-6 text-center text-lg`}>Total Supply: <strong>10,284,820,000,000 $LALAFI</strong></p>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div
                            className="bg-gray-700 p-4 rounded-lg border border-gold/50 text-center transition duration-300 hover:bg-gradient-to-r hover:from-gold hover:to-yellow-500 hover:text-black hover:scale-105 hover:shadow-lg"
                            variants={fadeInUp}
                        >
                            <h4 className="font-semibold text-lg mb-1 text-gold">🔒 Liquidity</h4>
                            <p className="text-2xl font-bold text-white">50%</p>
                            <p className="text-sm text-gold/70">Locked for Stability</p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-700 p-4 rounded-lg border border-gold/50 text-center transition duration-300 hover:bg-gradient-to-r hover:from-gold hover:to-yellow-500 hover:text-black hover:scale-105 hover:shadow-lg"
                            variants={fadeInUp}
                        >
                            <h4 className="font-semibold text-lg mb-1 text-gold">👑 Vesting</h4>
                            <p className="text-2xl font-bold text-white">30%</p>
                            <p className="text-sm text-gold/70">Founder/Team Allocation</p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-700 p-4 rounded-lg border border-gold/50 text-center transition duration-300 hover:bg-gradient-to-r hover:from-gold hover:to-yellow-500 hover:text-black hover:scale-105 hover:shadow-lg"
                            variants={fadeInUp}
                        >
                            <h4 className="font-semibold text-lg mb-1 text-gold">🚀 Growth</h4>
                            <p className="text-2xl font-bold text-white">20%</p>
                            <p className="text-sm text-gold/70">Marketing, Airdrop, Dev, CEX</p>
                        </motion.div>
                    </motion.div>

                    {/* Şeffaflık için Cüzdan Adresleri ve LP Kilit Kanıtı (YENİ KUTUCUKLU YAPI) */}
                    <motion.div
                        className="mt-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        <h4 className={`${subTitleStyle} mb-8 text-center`}>Transparency: Wallets & Proof</h4>
                        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* max-w-3xl mx-auto removed, inherits from parent */}
                            {/* Box 1: Liquidity Wallet */}
                            <motion.div className={gridBoxStyle} variants={fadeInUp}>
                                <div className="flex-grow p-2"> {/* Added padding inside for better text spacing */}
                                    <h5 className="font-semibold text-lg mb-3 text-gold">Liquidity Wallet</h5>
                                    <div className={listItemStyle}>
                                        <Check size={18} className={listIconStyle} />
                                        <span className={paragraphStyle}>
                                            <a href="https://bscscan.com/address/0x1234567890abcdef1234567890abcdef12345678" target="_blank" rel="noopener noreferrer" className="underline hover:text-white break-all">
                                                0x123...5678
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Box 2: Community Rewards Wallet */}
                            <motion.div className={gridBoxStyle} variants={fadeInUp}>
                                <div className="flex-grow p-2">
                                    <h5 className="font-semibold text-lg mb-3 text-gold">Community Rewards Wallet</h5>
                                    <div className={listItemStyle}>
                                        <Check size={18} className={listIconStyle} />
                                        <span className={paragraphStyle}>
                                            <a href="https://bscscan.com/address/0xabcdef1234567890abcdef1234567890abcdef12" target="_blank" rel="noopener noreferrer" className="underline hover:text-white break-all">
                                                0xabc...ef12
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Box 3: Development Wallet */}
                            <motion.div className={gridBoxStyle} variants={fadeInUp}>
                                <div className="flex-grow p-2">
                                    <h5 className="font-semibold text-lg mb-3 text-gold">Development Wallet</h5>
                                    <div className={listItemStyle}>
                                        <Check size={18} className={listIconStyle} />
                                        <span className={paragraphStyle}>
                                            <a href="https://bscscan.com/address/0x7890abcdef1234567890abcdef1234567890abcd" target="_blank" rel="noopener noreferrer" className="underline hover:text-white break-all">
                                                0x789...abcd
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Box 4: LP Lock Proof */}
                            <motion.div className={gridBoxStyle} variants={fadeInUp}>
                                <div className="flex-grow p-2">
                                    <h5 className="font-semibold text-lg mb-3 text-gold">LP Lock Proof</h5>
                                    <div className={listItemStyle}>
                                        <Check size={18} className={listIconStyle} />
                                        <span className={paragraphStyle}>
                                            <a href="https://team.finance/view-lock/0xexample" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                                                View on Team Finance
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section> {/* End Tokenomics Section */}

            {/* Community Updates Section (YENİ EKLENEN BÖLÜM) */}
            <motion.section
                className="py-16 px-4" // No bg-gray-900 to alternate with previous section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
            >
                <h2 className={sectionTitleStyle}>📢 Community Updates</h2>
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Airdrop Güncellemesi */}
                    <motion.div className={gridBoxStyle} variants={fadeInUp}>
                        <img src="/honey-badger.png" alt="LALAFI Airdrop" className={`${iconWrapperStyle} w-12 h-12 rounded-full border-2 border-gold/50`} />
                        <div className="flex-grow text-center">
                            <h3 className={subTitleStyle}>Airdrop is Live! 🎉</h3>
                            <p className={paragraphStyle}>
                            We're giving away 1 billion $LALAFI! Check out our post on X to participate: <a href="https://twitter.com/LALAFI_TOKEN" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">@LALAFIToken</a>
                            </p>
                        </div>
                    </motion.div>
                    {/* Meme Yarışması Güncellemesi */}
                    <motion.div className={gridBoxStyle} variants={fadeInUp}>
                        <img src="/honey-badger.png" alt="LALAFI Meme Contest" className={`${iconWrapperStyle} w-12 h-12 rounded-full border-2 border-gold/50`} />
                        <div className="flex-grow text-center">
                            <h3 className={subTitleStyle}>Meme Contest! 🚀</h3>
                            <p className={paragraphStyle}>
                            Share your best $LALAFI meme and win 50,000,000 $LALAFI! Follow us on Discord: <a href="https://discord.gg/LALAFI_TOKEN" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Join Now</a>
                            </p>
                        </div>
                    </motion.div>
                    {/* Topluluk Büyümesi Güncellemesi */}
                    <motion.div className={gridBoxStyle} variants={fadeInUp}>
                        <img src="/honey-badger.png" alt="LALAFI Community Growth" className={`${iconWrapperStyle} w-12 h-12 rounded-full border-2 border-gold/50`} />
                        <div className="flex-grow text-center">
                            <h3 className={subTitleStyle}>Community is Growing! 🌟</h3>
                            <p className={paragraphStyle}>
                            We've reached 500+ members! Join the Honey Badger's strength, find your place on Telegram: <a href="https://t.me/LALAFI_TOKEN" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Join Now</a>
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section> {/* End Community Updates Section */}

            {/* Mid CTA Section */}
            <motion.section
                className="py-12 px-4 text-center bg-gray-900" // Added bg for alternation
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
            >
                <h3 className="text-2xl font-semibold mb-6 text-gold">Ready to Join the Fearless?</h3>
                <div className="flex justify-center gap-4 flex-wrap">
                    <a href={`https://pancakeswap.finance/swap?outputCurrency=${contractAddress}`} target="_blank" rel="noopener noreferrer" className={primaryButtonStyle}>Buy $LALAFI Now 🚀</a>
                    <a href="https://t.me/LALAFI_TOKEN" target="_blank" rel="noopener noreferrer" className={secondaryButtonStyle}>Join Our Telegram ✈️</a>
                </div>
            </motion.section> {/* End Mid CTA Section */}

            {/* How to Buy Section */}
            <motion.section
                className="py-16 px-4"
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
            >
                <h2 className={sectionTitleStyle}>🛒 How to Buy $LALAFI</h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Step 1 */}
                    <motion.div className="flex flex-col sm:flex-row items-center gap-6 bg-gray-800 p-6 rounded-2xl border border-gold/30 shadow-md" variants={fadeInUp}>
                        <div className="flex-shrink-0 text-gold bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center border-2 border-gold">
                            <Download size={30} strokeWidth={1.5} />
                        </div>
                        <div className="text-center sm:text-left">
                            <h4 className={`${subTitleStyle} mb-1`}>Step 1: Get a Wallet</h4>
                            <p className={paragraphStyle}>Download <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">MetaMask</a> or <a href="https://trustwallet.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Trust Wallet</a> app or browser extension.</p>
                        </div>
                    </motion.div>
                    {/* Step 2 */}
                    <motion.div className="flex flex-col sm:flex-row items-center gap-6 bg-gray-800 p-6 rounded-2xl border border-gold/30 shadow-md" variants={fadeInUp}>
                        <div className="flex-shrink-0 text-gold bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center border-2 border-gold">
                            <Wallet size={30} strokeWidth={1.5} />
                        </div>
                        <div className="text-center sm:text-left">
                            <h4 className={`${subTitleStyle} mb-1`}>Step 2: Add BNB</h4>
                            <p className={paragraphStyle}>Fund your wallet with BNB (Binance Coin) on the Binance Smart Chain (BSC) network.</p>
                        </div>
                    </motion.div>
                    {/* Step 3 */}
                    <motion.div className="flex flex-col sm:flex-row items-center gap-6 bg-gray-800 p-6 rounded-2xl border border-gold/30 shadow-md" variants={fadeInUp}>
                        <div className="flex-shrink-0 text-gold bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center border-2 border-gold">
                            <ArrowRightCircle size={30} strokeWidth={1.5} />
                        </div>
                        <div className="text-center sm:text-left">
                            <h4 className={`${subTitleStyle} mb-1`}>Step 3: Go to PancakeSwap</h4>
                            <p className={paragraphStyle}>Visit <a href="https://pancakeswap.finance/swap" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">PancakeSwap</a> and connect your wallet.</p>
                        </div>
                    </motion.div>
                    {/* Step 4 */}
                    <motion.div className="flex flex-col sm:flex-row items-center gap-6 bg-gray-800 p-6 rounded-2xl border border-gold/30 shadow-md" variants={fadeInUp}>
                        <div className="flex-shrink-0 text-gold bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center border-2 border-gold">
                            <Copy size={30} strokeWidth={1.5} />
                        </div>
                        <div className="flex-col text-center sm:text-left w-full">
                            <h4 className={`${subTitleStyle} mb-1`}>Step 4: Add $LALAFI Address</h4>
                            <p className={`${paragraphStyle} mb-2`}>Click 'Select a currency' and paste the $LALAFI contract address:</p>
                            <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap mt-2 bg-gray-700 p-2 rounded">
                                <code className="text-xs text-gold/90 px-1 rounded break-all select-all">{contractAddress}</code>
                                <button
                                    onClick={copyToClipboard}
                                    className="p-1 bg-gray-600 rounded hover:bg-gray-500 transition"
                                    aria-label="Copy contract address"
                                >
                                    {isCopied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-gold/80" />}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                    {/* Step 5 */}
                    <motion.div className="flex flex-col sm:flex-row items-center gap-6 bg-gray-800 p-6 rounded-2xl border border-gold/30 shadow-md" variants={fadeInUp}>
                        <div className="flex-shrink-0 text-gold bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center border-2 border-gold">
                            <Repeat size={30} strokeWidth={1.5} />
                        </div>
                        <div className="text-center sm:text-left">
                            <h4 className={`${subTitleStyle} mb-1`}>Step 5: Swap!</h4>
                            <p className={paragraphStyle}>Enter the amount of BNB you want to swap for $LALAFI. Set slippage to ~5-7% and click 'Swap'. Confirm the transaction in your wallet.</p>
                        </div>
                    </motion.div>
                </div>
            </motion.section> {/* End How to Buy Section */}

            {/* Trade & Chart Links Section */}
            <motion.section
                className="py-12 px-4 bg-gray-900" // Added bg for alternation
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeInUp}
            >
                <h3 className="text-2xl font-semibold mb-8 text-center text-gold">📈 Trade & Chart</h3>
                <motion.div
                    className="flex justify-center gap-4 md:gap-6 flex-wrap max-w-lg mx-auto"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.a
                        href={`https://pancakeswap.finance/swap?outputCurrency=${contractAddress}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${primaryButtonStyle} flex items-center gap-2`}
                        variants={fadeInUp}
                    >
                        <ShoppingCart size={18} strokeWidth={2} />
                        Buy on PancakeSwap
                    </motion.a>
                    <motion.a
                        href={`https://poocoin.app/tokens/${contractAddress}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${secondaryButtonStyle} flex items-center gap-2`}
                        variants={fadeInUp}
                    >
                        <BarChart size={18} strokeWidth={2} />
                        Chart on PooCoin
                    </motion.a>
                </motion.div>
            </motion.section> {/* End Trade & Chart Links Section */}

            {/* Roadmap Section */}
            <motion.section
                className="py-16 px-4" // No bg, was bg-gray-900 before
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
            >
                <h2 className={sectionTitleStyle}>🗺️ Our Roadmap</h2>
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {/* Q2 2025 */}
                    <motion.div className={gridBoxStyle} variants={fadeInUp}>
                        <Rocket size={40} className={iconWrapperStyle} strokeWidth={1.5} />
                        <div className="flex-grow text-left">
                            <h3 className={`${subTitleStyle} text-center`}>Q2 2025 – LAUNCH & FOUNDATION</h3>
                            <ul className={listStyle}>
                                <li className={listItemStyle}><Check size={16} className={listIconStyle} /><span>Token launch & PancakeSwap listing</span></li>
                                <li className={listItemStyle}><Check size={16} className={listIconStyle} /><span>Liquidity lock & audit publication</span></li>
                                <li className={listItemStyle}><Check size={16} className={listIconStyle} /><span>Social media channels setup (X, Telegram, Discord)</span></li>
                                <li className={listItemStyle}><Check size={16} className={listIconStyle} /><span>First 1,000 community members target</span></li>
                                <li className={listItemStyle}><Check size={16} className={listIconStyle} /><span>Launch of meme competitions</span></li>
                            </ul>
                        </div>
                    </motion.div>
                    {/* Q3 2025 */}
                    <motion.div className={gridBoxStyle} variants={fadeInUp}>
                        <Globe size={40} className={iconWrapperStyle} strokeWidth={1.5} />
                        <div className="flex-grow text-left">
                            <h3 className={`${subTitleStyle} text-center`}>Q3 2025 – MARKETING BLAST 🚀</h3>
                            <ul className={listStyle}>
                                <li className={listItemStyle}><Check size={16} className={listIconStyle} /><span>Influencer collaborations (global & local)</span></li>
                                <li className={listItemStyle}><Check size={16} className={listIconStyle} /><span>Applications to CoinMarketCap & CoinGecko</span></li>
                                <li className={listItemStyle}><Check size={16} className={listIconStyle} /><span>First merch drop (t-shirts, caps, etc.)</span></li>
                                <li className={listItemStyle}><Check size={16} className={listIconStyle} /><span>Airdrop campaigns</span></li>
                                <li className={listItemStyle}><Check size={16} className={listIconStyle} /><span>10,000+ community target</span></li>
                            </ul>
                        </div>
                    </motion.div>
                    {/* Q4 2025 */}
                    <motion.div className={gridBoxStyle} variants={fadeInUp}>
                        <Package size={40} className={iconWrapperStyle} strokeWidth={1.5} />
                        <div className="flex-grow text-left">
                            <h3 className={`${subTitleStyle} text-center`}>Q4 2025 – ECOSYSTEM EXPANSION 🔗</h3>
                            <ul className={listStyle}>
                                <li className={listItemStyle}><Check size={16} className={listIconStyle} /><span>NFT collection announcement & pre-sale</span></li>
                                <li className={listItemStyle}><Check size={16} className={listIconStyle} /><span>Staking platform integration</span></li>
                                <li className={listItemStyle}><Check size={16} className={listIconStyle} /><span>Gaming partnerships (Play-to-Earn focus)</span></li>
                                <li className={listItemStyle}><Check size={16} className={listIconStyle} /><span>Mini-site launch (for NFT & staking)</span></li>
                                <li className={listItemStyle}><Check size={16} className={listIconStyle} /><span>MEXC listing target</span></li>
                            </ul>
                        </div>
                    </motion.div>
                    {/* Q1 2026 */}
                    <motion.div className={gridBoxStyle} variants={fadeInUp}>
                        <Award size={40} className={iconWrapperStyle} strokeWidth={1.5} />
                        <div className="flex-grow text-left">
                            <h3 className={`${subTitleStyle} text-center`}>Q1 2026 – BEYOND MEME 💡</h3>
                            <ul className={listStyle}>
                                <li className={listItemStyle}><Check size={16} className={listIconStyle} /><span>DAO structure setup process</span></li>
                                <li className={listItemStyle}><Check size={16} className={listIconStyle} /><span>First community AMAs & roadmap update</span></li>
                                <li className={listItemStyle}><Check size={16} className={listIconStyle} /><span>Expansion to international markets (Asia & Europe focus)</span></li>
                                <li className={listItemStyle}><Check size={16} className={listIconStyle} /><span>Major partnerships & media coverage</span></li>
                                <li className={listItemStyle}><Check size={16} className={listIconStyle} /><span>Binance listing target</span></li>
                            </ul>
                        </div>
                    </motion.div>
                    {/* FUTURE */}
<motion.div className={`${gridBoxStyle} sm:col-span-2 lg:col-span-4`} variants={fadeInUp}>
    <Target size={40} className={iconWrapperStyle} strokeWidth={1.5} />
    <div className="flex-grow text-left">
        <h3 className={`${subTitleStyle} text-center`}>FUTURE 🚀</h3>
        <ul className={listStyle}>
            <li className={listItemStyle}><Gamepad2 size={16} className={listIconStyle} /><span>Dedicated $LALAFI game & metaverse integration</span></li>
            <li className={listItemStyle}><Target size={16} className={listIconStyle} /><span>1B+ market cap goal 💥</span></li>
        </ul>
    </div>
</motion.div>
</motion.div>
</motion.section> {/* End Roadmap Section */}

            {/* Security / Audit Section */}
            <motion.section
                className="py-16 px-4 bg-gray-900" // Added bg for alternation
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}
            >
                <h2 className={sectionTitleStyle}>🔐 Security & Audit</h2>
                <div className={`${boxStyle} max-w-3xl mx-auto text-center`}>
                    <ShieldCheck size={50} className={`${iconWrapperStyle} mb-6`} strokeWidth={1.5} />
                    <p className={`${paragraphStyle} mb-6`}>
                        Our smart contract prioritizes security. We aim for transparency and trust within our community. Liquidity is locked for 1 year to ensure stability and build confidence.
                    </p>
                    <a href="#" className={`${primaryButtonStyle} inline-block mt-4`}>
                        <FileText size={18} className="inline-block mr-2" /> View Audit Report (Soon)
                    </a>
                </div>
            </motion.section> {/* End Security Section */}

            {/* FAQ Section */}
            <motion.section
                className="py-16 px-4" // No bg-gray-900, was bg-gray-900 before
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
            >
                <h2 className={sectionTitleStyle}>❓ FAQ</h2>
                <div className="max-w-3xl mx-auto space-y-6">
                    <motion.details className={`${boxStyle} cursor-pointer group`} variants={fadeInUp}>
                        <summary className={`${subTitleStyle} flex justify-between items-center list-none`}>
                            What is $LALAFI?
                            <HelpCircle className="text-gold/50 group-open:rotate-180 transition-transform" size={20} />
                        </summary>
                        <p className={`${paragraphStyle} mt-3`}>A fearless meme token on BNB Chain inspired by the honey badger's tenacity, aiming to build a strong community and utility within the MemeFi space.</p>
                    </motion.details>
                    <motion.details className={`${boxStyle} cursor-pointer group`} variants={fadeInUp}>
                        <summary className={`${subTitleStyle} flex justify-between items-center list-none`}>
                            How to buy $LALAFI?
                            <HelpCircle className="text-gold/50 group-open:rotate-180 transition-transform" size={20} />
                        </summary>
                        <p className={`${paragraphStyle} mt-3`}>Use a BSC-compatible wallet like MetaMask or Trust Wallet, fund it with BNB, and swap on PancakeSwap using our contract address. Follow the detailed steps in the 'How to Buy' section above.</p>
                    </motion.details>
                    <motion.details className={`${boxStyle} cursor-pointer group`} variants={fadeInUp}>
                        <summary className={`${subTitleStyle} flex justify-between items-center list-none`}>
                            Is liquidity locked?
                            <HelpCircle className="text-gold/50 group-open:rotate-180 transition-transform" size={20} />
                        </summary>
                        <p className={`${paragraphStyle} mt-3`}>Yes, 50% of the total supply allocated to liquidity is locked for 12 months initially via a trusted third-party locker to ensure project stability and investor confidence.</p>
                    </motion.details>
                    <motion.details className={`${boxStyle} cursor-pointer group`} variants={fadeInUp}>
                        <summary className={`${subTitleStyle} flex justify-between items-center list-none`}>
                            Will there be token burns?
                            <HelpCircle className="text-gold/50 group-open:rotate-180 transition-transform" size={20} />
                        </summary>
                        <p className={`${paragraphStyle} mt-3`}>Currently, there are no planned automatic burns. We believe in the full meme power of the initial supply! Future community decisions via DAO might explore manual burn events.</p>
                    </motion.details>
                </div>
            </motion.section> {/* End FAQ Section */}

            {/* Team Section */}
            <motion.section
                className="py-16 px-4 bg-gray-900" // Added bg
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
            >
                <h2 className={sectionTitleStyle}>👥 Meet the Team (Anonymous)</h2>
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[1, 2, 3].map((num) => (
                        <motion.div key={num} className={`${gridBoxStyle} flex flex-col items-center text-center`} variants={fadeInUp}>
                            <div className="w-24 h-24 rounded-full mb-4 border-2 border-gold/50 bg-gray-700 flex items-center justify-center">
                                <span className="text-4xl opacity-70">👤</span>
                            </div>
                            <h4 className={subTitleStyle}>Core Member {num}</h4>
                            <p className={paragraphStyle}>Dedicated Builder</p>
                        </motion.div>
                    ))}
                </motion.div>
                <p className={`${paragraphStyle} text-center mt-8 max-w-2xl mx-auto`}>
                    Our core team operates anonymously, focusing solely on building and growing the LALAFI ecosystem. Security and community trust are our top priorities.
                </p>
            </motion.section> {/* End Team Section */}

            {/* Whitepaper Section */}
            <motion.section
                className="py-16 px-4" // No bg, was bg-gray-900 before
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}
            >
                <h2 className={sectionTitleStyle}>📄 Whitepaper</h2>
                <div className={`${boxStyle} max-w-3xl mx-auto text-center`}>
                    <FileText size={50} className={`${iconWrapperStyle} mb-6`} strokeWidth={1.5} />
                    <p className={`${paragraphStyle} mb-6`}>
                        Dive deeper into the vision, technology, tokenomics, and detailed roadmap of $LALAFI. Download our comprehensive whitepaper for full details.
                    </p>
                    <a href="/whitepaper.pdf" download className={`${primaryButtonStyle} inline-block`}>
                        Download Whitepaper
                    </a>
                </div>
            </motion.section> {/* End Whitepaper Section */}

            {/* Final CTA Section */}
            <motion.section
                className="py-20 px-4 text-center bg-gray-900" // Added bg
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
            >
                <h3 className="text-3xl font-bold mb-8 text-gold">Don't Miss Out on the LALAFI Revolution!</h3>
                <div className="flex justify-center gap-4 flex-wrap">
                    <a href={`https://pancakeswap.finance/swap?outputCurrency=${contractAddress}`} target="_blank" rel="noopener noreferrer" className={`${primaryButtonStyle} px-8 py-4 text-lg`}>Buy $LALAFI Now 🚀</a>
                    <a href="https://twitter.com/LALAFI_TOKEN" target="_blank" rel="noopener noreferrer" className={`${secondaryButtonStyle} px-8 py-4 text-lg`}>Follow on X 🐦</a>
                </div>
            </motion.section> {/* End Final CTA Section */}

            {/* Footer Section */}
            <footer className="bg-black text-gold/70 py-10 text-center text-sm mt-12 border-t border-gold/20">
                {/* Social Icons */}
                <div className="mb-6">
                    <a href="https://twitter.com/LALAFI_TOKEN" target="_blank" rel="noopener noreferrer" className="mx-4 inline-block text-gold text-3xl transition duration-300 hover:scale-125 hover:text-white"><Twitter /></a>
                    <a href="https://t.me/LALAFI_TOKEN" target="_blank" rel="noopener noreferrer" className="mx-4 inline-block text-gold text-3xl transition duration-300 hover:scale-125 hover:text-white"><Send /></a>
                    {/* Add Discord link here if available */}
                    {/* <a href="YOUR_DISCORD_LINK" target="_blank" rel="noopener noreferrer" className="mx-4 inline-block text-gold text-3xl transition duration-300 hover:scale-125 hover:text-white"><svg>...</svg></a> */}
                </div>
                {/* Contract Address in Footer */}
                <div className="flex items-center justify-center gap-2 flex-wrap px-4 mb-6">
                    <span className="whitespace-nowrap">Contract Address (BSC):</span>
                    <code className="text-xs bg-gray-700 px-2 py-1 rounded break-all select-all">{contractAddress}</code>
                    <button
                        onClick={copyToClipboard}
                        className="p-1.5 bg-gray-700 rounded hover:bg-gray-600 transition"
                        aria-label="Copy contract address"
                    >
                        {isCopied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-gold/80" />}
                    </button>
                    <a href={`https://bscscan.com/token/${contractAddress}`} target="_blank" rel="noopener noreferrer" title="View on BscScan" className="p-1.5 bg-gray-700 rounded hover:bg-gray-600 transition ml-1">
                        <img src="/bscscan-logo-light.svg" alt="BscScan" className="w-4 h-4" />
                    </a>
                </div>
                {/* Disclaimer */}
                <p className="mt-4 px-4 max-w-lg mx-auto text-gold/60">
                    Disclaimer: $LALAFI is a meme token created for entertainment purposes. It holds no intrinsic value or expectation of financial return. Cryptocurrencies are volatile and high-risk. Always conduct your own research (DYOR) before investing.
                </p>
                {/* Copyright */}
                <p className="mt-6 text-gold/50">&copy; {new Date().getFullYear()} LALAFI Token. All Rights Reserved.</p>
            </footer> {/* End Footer Section */}

        </motion.div> // End Main Wrapper
    );
}

export default App;