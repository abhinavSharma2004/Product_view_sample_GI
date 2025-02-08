import Header from './components/Header';
import ProductInfo from './components/ProductInfo';
import HowItsMade from './components/HowItsMade';
import WhySustainable from './components/WhySustainable';
import PracticesInvolved from './components/PracticesInvolved.jsx';
import SDGs from './components/SDGs';
import Message from './components/Message';
import Footer from './components/Footer';
import Journey from './components/Journey.jsx';
import Spacer from './components/Spacer.jsx';

const App = () => {
  
  const page_name = "Product line view - GIS3 Trace"
  const companyName = "Grow Indigo"

  const product = {
    name: "Maggie",
    price: "₹20",
    description: "High-quality instant noodles.",
    sdgs: "461 tCO2e",
    id: "CN2P01",
  };

  const message = "You're not just enjoying a great product—you’re driving real change! By choosing sustainably sourced ingredients, you're supporting farmers, protecting the planet, and building a better future. Every choice matters, and together, we make a difference!";

  const items = [
    { asset: "Grain", firms: "xyz", activity: "Farmer" },
    { asset: "Packs", firms: "xyz", activity: "Trader" },
    { asset: "Wheat Flour",firms: "xyz", activity: "Miller" },
    { asset: "Noodles",firms: "xyz", activity: "Manufacturing" },
    { asset: "Noodle Packets",firms: "xyz", activity: "Packaging" },
    { asset: "Maggi",firms: "xyz", activity: "Brand"},
  ];

  const sustainableDescription = "Sustainable wheat ensures soil health, water conservation, and lower emissions, creating a resilient supply chain for farmers, the environment, and future food security."

  const sdgsList = [2,8,12,13];

  return (
    <div className="font-sans">
      <Header
        page_name={page_name}
      />
      <ProductInfo
      name={product.name}
      price={product.price}
      description={product.description} 
      sdgs={product.sdgs} 
      id={product.id} />
      <HowItsMade items={items}/>
      <Journey items={items}/>
      <Spacer/>
      <WhySustainable description={sustainableDescription} />
      <Spacer/>
      <PracticesInvolved description={sustainableDescription} />
      <Spacer/>
      <SDGs sdgList={sdgsList} />
      <Message message={message} />
      <Spacer/>
      <Footer companyName={companyName} />
    </div>
  );
};

export default App;
