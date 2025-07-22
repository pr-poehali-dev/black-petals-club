import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gothic-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gothic-black via-gothic-gray to-gothic-purple opacity-90"></div>
      <div className="fixed inset-0 bg-[url('img/8ed895aa-08dd-447c-a720-75897d051321.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      
      {/* Header */}
      <header className="relative z-10 p-6">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Icon name="Flower" className="w-8 h-8 text-gothic-red" />
            <h1 className="text-2xl font-bold text-gothic-silver" style={{fontFamily: 'Cormorant Garamond'}}>
              BLACK PETALS SYNDICATE
            </h1>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-6 text-gothic-silver">
              <a href="#family" className="flex items-center space-x-2 hover:text-gothic-red transition-colors cursor-pointer">
                <Icon name="Users" className="w-5 h-5" />
                <span>The Family</span>
              </a>
              <a href="#products" className="flex items-center space-x-2 hover:text-gothic-red transition-colors cursor-pointer">
                <Icon name="Flower2" className="w-5 h-5" />
                <span>Products</span>
              </a>
              <a href="#rituals" className="flex items-center space-x-2 hover:text-gothic-red transition-colors cursor-pointer">
                <Icon name="Moon" className="w-5 h-5" />
                <span>Rituals</span>
              </a>
              <a href="#contact" className="flex items-center space-x-2 hover:text-gothic-red transition-colors cursor-pointer">
                <Icon name="MessageCircle" className="w-5 h-5" />
                <span>Contact</span>
              </a>
            </div>
            
            <Button className="bg-gothic-red hover:bg-red-700 text-white px-6 py-2 transition-all transform hover:scale-105">
              Apply
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-gothic-purple text-gothic-silver mb-4 px-4 py-2 text-sm tracking-wider">
              MEMBERS ONLY
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gothic-silver leading-tight" 
              style={{fontFamily: 'Cormorant Garamond'}}>
            Black Petals<br />
            <span className="text-gothic-red">Syndicate</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gothic-silver/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Добро пожаловать в закрытый клуб ценителей редких и таинственных растений. 
            Только для избранных.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gothic-red hover:bg-red-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all">
              <Icon name="Key" className="w-5 h-5 mr-2" />
              Подать заявку
            </Button>
            <Button variant="outline" size="lg" className="border-gothic-silver text-gothic-silver hover:bg-gothic-silver hover:text-gothic-black px-8 py-4 text-lg transition-all">
              <Icon name="Eye" className="w-5 h-5 mr-2" />
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* The Family Section */}
      <section id="family" className="relative z-10 py-20 px-6 bg-gothic-gray/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gothic-silver mb-4" style={{fontFamily: 'Cormorant Garamond'}}>
              The Family
            </h2>
            <p className="text-xl text-gothic-silver/70 max-w-2xl mx-auto">
              Познакомьтесь с нашими экспертами по редким растениям. Каждый — мастер своего дела.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { name: "Isabella Noir", role: "Куратор коллекции", speciality: "Редкие розы" },
              { name: "Viktor Shade", role: "Мастер по выращиванию", speciality: "Тропические виды" },
              { name: "Luna Blackwood", role: "Алхимик растений", speciality: "Лекарственные травы" }
            ].map((member, index) => (
              <Card key={index} className="bg-gothic-purple/30 border-gothic-silver/20 hover:border-gothic-red/50 transition-all transform hover:scale-105">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 bg-gothic-silver/10 rounded-full flex items-center justify-center">
                    <Icon name="User" className="w-12 h-12 text-gothic-silver" />
                  </div>
                  <CardTitle className="text-gothic-silver text-center" style={{fontFamily: 'Cormorant Garamond'}}>
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-gothic-silver/70 text-center">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-gothic-red/20 text-gothic-silver mx-auto block w-fit">
                    {member.speciality}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center p-6 bg-gothic-red/10 border border-gothic-red/30 rounded-lg">
            <p className="text-gothic-red font-semibold text-lg">Next shipment: 3 days. Don't be late.</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gothic-silver mb-4" style={{fontFamily: 'Cormorant Garamond'}}>
              Forbidden Collection
            </h2>
            <p className="text-xl text-gothic-silver/70 max-w-2xl mx-auto">
              Эксклюзивные растения для истинных ценителей. Каждое — произведение искусства природы.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Black Widow Rose", 
                price: "25,000₽", 
                rarity: "Legendary", 
                image: "img/07f98ed0-dfec-4bc7-984e-b11adcaa731e.jpg",
                description: "Редчайшая роза с лепестками цвета полуночи"
              },
              { 
                name: "Midnight Orchid", 
                price: "18,500₽", 
                rarity: "Rare", 
                image: "img/07f98ed0-dfec-4bc7-984e-b11adcaa731e.jpg",
                description: "Орхидея, которая цветёт только в полнолуние"
              },
              { 
                name: "Shadow Fern", 
                price: "12,000₽", 
                rarity: "Limited", 
                image: "img/07f98ed0-dfec-4bc7-984e-b11adcaa731e.jpg",
                description: "Папоротник из глубин тёмного леса"
              }
            ].map((product, index) => (
              <Card key={index} className="bg-gothic-purple/20 border-gothic-silver/20 hover:border-gothic-red/50 transition-all group transform hover:scale-105">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge 
                      className={`${
                        product.rarity === 'Legendary' ? 'bg-gothic-red text-white' :
                        product.rarity === 'Rare' ? 'bg-gothic-purple text-gothic-silver' :
                        'bg-gothic-silver/20 text-gothic-silver'
                      }`}
                    >
                      {product.rarity}
                    </Badge>
                    <span className="text-gothic-red font-bold text-xl">{product.price}</span>
                  </div>
                  <CardTitle className="text-gothic-silver" style={{fontFamily: 'Cormorant Garamond'}}>
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gothic-silver/70">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gothic-red hover:bg-red-700 text-white transition-all">
                    <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                    Make an Offer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rituals Section */}
      <section id="rituals" className="relative z-10 py-20 px-6 bg-gothic-gray/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gothic-silver mb-4" style={{fontFamily: 'Cormorant Garamond'}}>
              Sacred Rituals
            </h2>
            <p className="text-xl text-gothic-silver/70 max-w-2xl mx-auto">
              Мастер-классы по «правильному уходу» за редкими растениями. Только для членов синдиката.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Midnight Gardening",
                date: "15 декабря",
                time: "23:00",
                phase: "Новолуние",
                description: "Секреты выращивания роз в лунном свете"
              },
              {
                title: "Blood & Thorns",
                date: "22 декабря",
                time: "22:30",
                phase: "Растущая луна",
                description: "Древние методы укоренения редких видов"
              },
              {
                title: "Shadow Propagation",
                date: "29 декабря",
                time: "00:00",
                phase: "Полнолуние",
                description: "Размножение растений в полной темноте"
              },
              {
                title: "Winter Solstice Special",
                date: "31 декабря",
                time: "23:59",
                phase: "Убывающая луна",
                description: "Особый ритуал встречи Нового года"
              }
            ].map((ritual, index) => (
              <Card key={index} className="bg-gothic-purple/30 border-gothic-silver/20 hover:border-gothic-red/50 transition-all">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Badge className="bg-gothic-red/20 text-gothic-silver">
                      {ritual.phase}
                    </Badge>
                    <div className="flex items-center text-gothic-silver/70">
                      <Icon name="Clock" className="w-4 h-4 mr-1" />
                      {ritual.time}
                    </div>
                  </div>
                  <CardTitle className="text-gothic-silver" style={{fontFamily: 'Cormorant Garamond'}}>
                    {ritual.title}
                  </CardTitle>
                  <CardDescription className="text-gothic-silver/70">
                    {ritual.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-gothic-silver font-semibold">{ritual.date}</span>
                    <Button size="sm" className="bg-gothic-red hover:bg-red-700 text-white">
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gothic-silver mb-4" style={{fontFamily: 'Cormorant Garamond'}}>
              Secret Contact
            </h2>
            <p className="text-xl text-gothic-silver/70 max-w-2xl mx-auto">
              Свяжитесь с нами через зашифрованные каналы. Конфиденциальность гарантирована.
            </p>
          </div>
          
          <Card className="bg-gothic-purple/20 border-gothic-silver/20">
            <CardHeader>
              <CardTitle className="text-gothic-silver text-center" style={{fontFamily: 'Cormorant Garamond'}}>
                Encrypted Communication Form
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gothic-silver mb-2">Your Alias</label>
                  <input 
                    type="text" 
                    className="w-full bg-gothic-gray/30 border border-gothic-silver/20 rounded-lg px-4 py-3 text-gothic-silver focus:border-gothic-red focus:outline-none"
                    placeholder="Введите псевдоним..."
                  />
                </div>
                <div>
                  <label className="block text-gothic-silver mb-2">Secret Code</label>
                  <input 
                    type="text" 
                    className="w-full bg-gothic-gray/30 border border-gothic-silver/20 rounded-lg px-4 py-3 text-gothic-silver focus:border-gothic-red focus:outline-none"
                    placeholder="Код доступа..."
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gothic-silver mb-2">Encrypted Message</label>
                <textarea 
                  rows={6}
                  className="w-full bg-gothic-gray/30 border border-gothic-silver/20 rounded-lg px-4 py-3 text-gothic-silver focus:border-gothic-red focus:outline-none resize-none"
                  placeholder="Ваше сообщение будет зашифровано..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <Button size="lg" className="bg-gothic-red hover:bg-red-700 text-white px-12 py-4 transition-all transform hover:scale-105">
                  <Icon name="Send" className="w-5 h-5 mr-2" />
                  Отправить в тени
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 text-gothic-silver/70 bg-gothic-purple/20 px-6 py-3 rounded-lg">
              <Icon name="MapPin" className="w-5 h-5 text-gothic-red" />
              <span>Secret greenhouse location: [CLASSIFIED]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-gothic-silver/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <Icon name="Flower" className="w-8 h-8 text-gothic-red" />
            <h3 className="text-2xl font-bold text-gothic-silver" style={{fontFamily: 'Cormorant Garamond'}}>
              BLACK PETALS SYNDICATE
            </h3>
          </div>
          
          <p className="text-gothic-silver/70 mb-6 max-w-2xl mx-auto">
            Присоединяйтесь к элитному клубу ценителей редких растений. 
            Где каждый цветок — это тайна, а каждая покупка — приключение.
          </p>
          
          <div className="flex justify-center space-x-6 text-gothic-silver/50">
            <span>© 2024 Black Petals Syndicate</span>
            <span>•</span>
            <span>Members Only</span>
            <span>•</span>
            <span>Confidential</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;