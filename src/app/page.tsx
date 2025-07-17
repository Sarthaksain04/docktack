

import Image from "next/image";
import { ThemeProvider } from "@/components/theme-provider";
import { RainbowButton } from "../components/ui/rainbow-button";
import { ArrowRight ,Globe, Zap , Cpu , Search , BarChart , Network  } from "lucide-react";
import DeveloperTools from "@/components/ui/DeveloperTools";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  
 

 
  
     const features = [
    {
      icon: Globe,
      title: "Decentralize Deployment",
      description:
        "Deploy and access your website forever for free on the blockchain.",
    },
    {
      icon: Zap,
      title: "Instant Preview & CI/CD",
      description:
        "Automatic deployments from GitHub with instant preview links and version control.",
    },
    {
      icon: Cpu,
      title: "AI Website Generator",
      description:
        "Generate a website using AI and deploy it directly to the blockchain.",
    },
    {
      icon: Search,
      title: "Decentralized Search Engine",
      description:
        "Our search engine has indexed all websites on the blockchain network.",
    },
    {
      icon: BarChart,
      title: "Analytics & Monitoring",
      description:
        "Real-time analytics dashboard and uptime monitoring for your decentralized websites.",
    },
    {
      icon: Network,
      title: "Decentralized CDN",
      description:
        "Utilize our decentralized content delivery network for faster and more reliable access.",
    },
  ];

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen p-8 pb-20 gap-16 sm:p-12 font-sans ">
        {/* <header className="mb-12 text-center">
          <Image
            className="mx-auto mb-4"
            src="/svg/lock.png" 
            alt="HTTP3 logo"
            width={70}
            height={30}
            priority
          />
          <h1 className="text-5xl max-w-3xl mx-auto font-bold mb-4">
            The Future of Web3 Hosting on{" "}
            <span className="text-primary">Smart Contracts</span>
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Host your legacy websites like calculators and unit converters on
            the blockchain, absolutely free! No hosting fees, no expiration
            dates. Preserve your simple web projects forever with HTTP3's
            decentralized hosting.
          </p>
        
          <div className="flex justify-between items-center mt-7 px-178">
          <RainbowButton className="px-6 py-3 text-sm">
            Deploy for Free Now <ArrowRight className="ml-2 h-4 w-4" />
          </RainbowButton>
           
             <button className="cursor-pointer text-zinc-200 flex gap-2 items-center bg-black px-4 py-3.5 rounded-lg font-medium text-sm hover:bg-[#2f2f2f] transition-all ease-in duration-200">
               Learn How It Works
            </button>
          </div>
        </header> */}
        <header className="min-h-screen flex flex-col justify-center items-center text-center px-6 -mt-17 overflow-hidden">
          
           
        
          <Image
            className="mx-auto mb-4"
            src="/svg/lock.png"
            alt="HTTP3 logo"
            width={70}
            height={30}
            priority
            
          />
            {/* <h1 className="text-4xl md:text-6xl max-w-7.5xl font-bold mb-10 leading-tight text-white">
              The Future of Web3 Hosting on{" "}
              <span className="text-primary">Smart Contracts</span>
            </h1> */}
            <h1 className="text-center font-bold mb-6 leading-tight mt-8 text-white">
              <span className="block text-4xl md:text-6xl">
                The Future of Web3 Hosting on
              </span>
              <span className="block text-5xl md:text-7xl text-primary mt-2">
                Smart Contracts
              </span>
            </h1>
            <p className="text-lg text-white max-w-3xl mb-10 mt-10">
              Host your legacy websites like calculators and unit converters on the
              blockchain, absolutely free! No hosting fees, no expiration dates.
              Preserve your simple web projects forever with HTTP3's decentralized
              hosting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-5">
              <RainbowButton className="px-8 py-4 text-base">
                Deploy for Free Now <ArrowRight className="ml-2 h-4 w-4" />
              </RainbowButton>

              <button className="cursor-pointer text-zinc-200 flex gap-2 items-center bg-black px-10 py-4 -mt-1 rounded-lg font-medium text-base hover:bg-white/10 transition-all ease-in duration-200">
                Learn How It Works
              </button>
            </div>
          </header>


        <main className="max-w-6xl mx-auto mt-12 ">
          <section className="mb-16 text-center">
            <h2 className="text-5xl font-semibold mb-16">
              Revolutionary Web3 Hosting Platform
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-20 ">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#020618] border border-1 p-1 rounded-2xl min-h-[290px] transition-opacity duration-300 hover:opacity-80 hover:shadow-2xl"
                >
                  <feature.icon className="w-16 h-16 text-primary mb-6 mx-auto" />
                  <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground">{feature.description}</p>
                </div>
              ))}
      
    </div>
  </section>
</main>



          <DeveloperTools />
         
         
          </div>
          
           
       <div className="absolute inset-0 -z-10  overflow-hidden">
        
          <WavyBackground />
        </div>
        
    </ThemeProvider>
    
    
  );
}