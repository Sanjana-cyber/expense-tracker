import { SignInButton, SignUpButton } from '@clerk/nextjs';
import Image from 'next/image';
import Footer from './Footer';
import Features from './Feature';
  

const Guest = () => {
  return (
    <>
    <section className="hero">
      <div className="hero-content">
        <h1>Smart Expense Tracker</h1>
        <p>
          Take control of your finances. Track your income and expenses easily.
        </p>

        <div className="hero-buttons">
          <SignInButton mode="modal">
            <button className="primary-btn">Login</button>
          </SignInButton>

          <SignUpButton mode="modal">
            <button className="secondary-btn">Sign Up</button>
          </SignUpButton>
        </div>
      </div>

      {/* Right Side - App Preview */}
      <div className="hero-images">
        <div className="phone-mockup">
          <Image 
            src="/pexels-anna-nekrashevich-6801680.jpg" 
            alt="Expense Tracker Dashboard"
            width={250}
            height={500}
          />
        </div>
        <div className="phone-mockup">
          <Image 
            src="/pexels-alesiakozik-6771899.jpg" 
            alt="Transaction List"
            width={280}
            height={580}
          />
        </div>

      </div>

      {/* Logo Badge */}
    
    </section>
    <Features />
      <div className="footer-container"><Footer/></div></>
  );
};

export default Guest;