import { motion } from "motion/react";
import { 
  Building, 
  Home as HomeIcon, 
  Key, 
  MapPin, 
  Mail, 
  Search, 
  ChevronRight,
  BedDouble,
  Bath,
  Square,
  MessageCircle
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-xl">
                <HomeIcon className="text-white w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-slate-900">
                Sky Property Chandigarh
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#buy" className="hover:text-slate-900 transition-colors">Buy Property in Chandigarh</a>
              <a href="#sell" className="hover:text-slate-900 transition-colors">Sell Property in Chandigarh</a>
              <a href="#rent" className="hover:text-slate-900 transition-colors">Rent</a>
              <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
            </div>
            <div className="hidden md:flex">
              <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
                List Property
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1920&auto=format&fit=crop"
            alt="Chandigarh Real Estate"
            className="object-cover w-full h-full"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight max-w-5xl mx-auto"
          >
            Sky Property Chandigarh – Trusted Real Estate Consultant in Chandigarh
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-xl text-slate-200 max-w-3xl mx-auto"
          >
            Welcome to Sky Real Estate Chandigarh. Your premier property dealer in Chandigarh for finding the perfect homes, commercial spaces, and premium flats.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 max-w-3xl mx-auto bg-white p-2 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row gap-2"
          >
            <div className="flex-1 flex items-center px-6 py-3 md:py-0 border-b md:border-b-0 md:border-r border-slate-200">
              <MapPin className="w-5 h-5 text-slate-400 mr-3" />
              <input 
                type="text" 
                placeholder="Search flats for sale in Chandigarh" 
                className="w-full focus:outline-none text-slate-900 placeholder:text-slate-400 bg-transparent text-sm md:text-base outline-none"
              />
            </div>
            <div className="flex-1 flex items-center px-6 py-3 md:py-0">
              <HomeIcon className="w-5 h-5 text-slate-400 mr-3" />
              <select className="w-full focus:outline-none text-slate-900 bg-transparent cursor-pointer appearance-none text-sm md:text-base outline-none">
                <option value="">Property Type</option>
                <option value="house">Independent House</option>
                <option value="apartment">Flats for Sale in Chandigarh</option>
                <option value="plot">Plot/Land</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>
            <button className="bg-slate-900 text-white rounded-xl md:rounded-full px-8 py-4 font-medium hover:bg-slate-800 transition-colors flex items-center justify-center">
              <Search className="w-5 h-5 mr-2" />
              Search
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-slate-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Expert Services by Sky Property Chandigarh</h2>
            <p className="mt-4 text-lg text-slate-600">As a leading real estate consultant Chandigarh, we provide comprehensive solutions for all your property needs.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: "buy",
                title: "Buy Property in Chandigarh",
                desc: "Discover premium homes and the best flats for sale in Chandigarh with our extensive portfolio.",
                icon: HomeIcon,
                action: "Search Homes"
              },
              {
                id: "sell",
                title: "Sell Property in Chandigarh",
                desc: "Get the best market value for your property. Trust the top property dealer in Chandigarh to handle your sale.",
                icon: Building,
                action: "See Options"
              },
              {
                id: "rent",
                title: "Rent a Property",
                desc: "Explore beautiful rental homes and apartments with flexible terms across top Chandigarh locations.",
                icon: Key,
                action: "Find Rentals"
              }
            ].map((service, index) => (
              <motion.div 
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 relative group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-slate-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8">{service.desc}</p>
                <button className="flex items-center text-slate-900 font-medium font-display group/btn">
                  {service.action} 
                  <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties & Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Featured Chandigarh Real Estate</h2>
              <p className="mt-4 text-lg text-slate-600">Explore handpicked real estate opportunities from Sky Real Estate Chandigarh in the most sought-after sectors.</p>
            </div>
            <button className="flex-shrink-0 text-slate-900 font-medium px-6 py-3 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors">
              View All Properties
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Villa in Sector 10",
                loc: "Sector 10, Chandigarh",
                price: "₹ 8.5 Cr",
                beds: 4, baths: 5, sqft: "4,200",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
                type: "Sale"
              },
              {
                title: "Luxury Apartment - Flat for Sale",
                loc: "IT Park Rd, Chandigarh",
                price: "₹ 1.2 L / mo",
                beds: 3, baths: 3, sqft: "2,100",
                image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop",
                type: "Rent"
              },
              {
                title: "Independent Floor",
                loc: "Sector 35, Chandigarh",
                price: "₹ 3.2 Cr",
                beds: 3, baths: 3, sqft: "2,800",
                image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
                type: "Sale"
              }
            ].map((prop, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-72 rounded-3xl overflow-hidden mb-6">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-sm uppercase tracking-wider">
                    For {prop.type}
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {prop.title}
                    </h3>
                    <p className="text-slate-500 flex items-center text-sm mt-1">
                      <MapPin className="w-3.5 h-3.5 mr-1" /> {prop.loc}
                    </p>
                  </div>
                  <div className="text-xl font-bold font-display text-slate-900 whitespace-nowrap">
                    {prop.price}
                  </div>
                </div>
                
                <div className="flex items-center gap-6 mt-6 pt-6 border-t border-slate-100 text-slate-600 text-sm">
                  <div className="flex items-center gap-2">
                    <BedDouble className="w-4 h-4 text-slate-400" />
                    <span>{prop.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-4 h-4 text-slate-400" />
                    <span>{prop.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-4 h-4 text-slate-400" />
                    <span>{prop.sqft} sqft</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO FAQs */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-slate-600">Common questions about Chandigarh real estate and our services.</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Why choose Sky Property Chandigarh?</h3>
              <p className="text-slate-600">As a leading real estate consultant Chandigarh, we offer transparent deals, expert market insights, and a seamless process whether you want to buy property in Chandigarh or sell your existing home.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Are there affordable flats for sale in Chandigarh?</h3>
              <p className="text-slate-600">Yes, Sky Real Estate Chandigarh has a diverse portfolio ranging from luxurious villas to budget-friendly flats for sale in Chandigarh.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">How can I sell property in Chandigarh quickly?</h3>
              <p className="text-slate-600">By partnering with an experienced property dealer in Chandigarh like us, you gain access to a larger network of qualified buyers, ensuring your property is sold quickly and at the right price.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-900 text-white" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to find your next home?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Get in touch with the top property dealer in Chandigarh today. Sky Property Chandigarh is here to help you navigate the market with confidence.
            </p>
          </div>
            
          <div className="bg-white rounded-3xl p-8 md:p-10 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-bold font-display mb-6 text-center">Send us a message</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">I'm interested in</label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 appearance-none">
                  <option>Buy Property in Chandigarh</option>
                  <option>Sell Property in Chandigarh</option>
                  <option>Flats for Sale in Chandigarh</option>
                  <option>General inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 resize-none" placeholder="Tell us more about what you're looking for..."></textarea>
              </div>
              <button type="button" className="w-full bg-slate-900 text-white font-medium py-4 rounded-xl hover:bg-slate-800 transition-colors mt-6">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 text-center text-slate-500 text-sm border-t border-slate-800">
        <p>&copy; {new Date().getFullYear()} Sky Property Chandigarh. All rights reserved.</p>
        <p className="mt-2 text-xs">Your trusted Real Estate Consultant in Chandigarh | Buy, Sell, and Rent.</p>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-16 right-6 z-50">
        <a href="#contact" className="group flex items-center gap-2.5 bg-sky-600 outline outline-2 outline-white/80 text-white px-4 py-3 rounded-full shadow-xl hover:bg-sky-700 transition-all hover:-translate-y-1">
          <div className="relative">
            <MessageCircle className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
          </div>
          <span className="font-semibold text-sm tracking-tight text-white/90 group-hover:text-white">Inquire Now</span>
        </a>
      </div>
    </div>
  );
}
