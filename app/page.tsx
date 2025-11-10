import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Clock, Heart, Wheat, Award } from "lucide-react"
import { VoiceChatbotScript } from "@/components/voice-chatbot-script"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-secondary py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6 text-balance">
                  Freshly Baked Goodness Every Morning
                </h1>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Welcome to The Golden Crust, where tradition meets taste. We rise before the sun to bring you warm,
                  artisan-crafted breads, flaky pastries, and delightful treats made from scratch with locally-sourced
                  ingredients.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                    <Link href="/menu">View Our Menu</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/about">Learn Our Story</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/artisan-bread-and-pastries-on-rustic-wooden-table.jpg"
                  alt="Fresh artisan bread and pastries"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-bold text-center text-primary mb-4">
              Why Choose The Golden Crust?
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              We're more than just a bakery—we're a community gathering place where quality, tradition, and warmth come
              together in every bite.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">Baked Fresh Daily</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our bakers arrive at 4 AM every morning to ensure you get the freshest bread and pastries, still
                    warm from the oven.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Wheat className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">Local Ingredients</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We partner with local farms and suppliers to source the finest organic flour, butter, and seasonal
                    fruits for authentic flavor.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">Made with Love</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every loaf, croissant, and cookie is handcrafted by our passionate bakers who take pride in their
                    artisan techniques.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">Award Winning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Recognized as "Best Neighborhood Bakery" three years running by the Riverside Food Critics
                    Association.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Items Section */}
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-bold text-center text-primary mb-4">Customer Favorites</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              These beloved items keep our customers coming back day after day. Each one is a testament to our
              commitment to quality and flavor.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src="/rustic-sourdough-loaf.png"
                    alt="Sourdough bread"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Classic Sourdough</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our signature sourdough, fermented for 48 hours for that perfect tangy flavor and crispy crust. Made
                    with our 10-year-old starter that gives it unmatched depth.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src="/buttery-croissants-on-plate.jpg"
                    alt="Butter croissants"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Butter Croissants</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Flaky, buttery perfection with 27 delicate layers. Made with European-style butter and a three-day
                    lamination process for that melt-in-your-mouth texture.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src="/cinnamon-rolls-icing.png"
                    alt="Cinnamon rolls"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Cinnamon Rolls</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Soft, pillowy rolls swirled with cinnamon sugar and topped with cream cheese frosting. Best enjoyed
                    warm—they sell out by 10 AM every Saturday!
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/menu">See Full Menu</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-bold text-center text-primary mb-12">What Our Customers Say</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card">
                <CardContent className="pt-6">
                  <div className="text-accent text-2xl mb-4">★★★★★</div>
                  <p className="text-foreground/80 mb-4 leading-relaxed italic">
                    "The best bakery in town, hands down! Their sourdough is incredible, and the staff always greets you
                    with a smile. It's become our Sunday morning tradition."
                  </p>
                  <p className="font-semibold">— Sarah M.</p>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardContent className="pt-6">
                  <div className="text-accent text-2xl mb-4">★★★★★</div>
                  <p className="text-foreground/80 mb-4 leading-relaxed italic">
                    "I've tried bakeries all over California, and The Golden Crust is truly special. You can taste the
                    quality in every bite. The almond croissants are to die for!"
                  </p>
                  <p className="font-semibold">— Michael R.</p>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardContent className="pt-6">
                  <div className="text-accent text-2xl mb-4">★★★★★</div>
                  <p className="text-foreground/80 mb-4 leading-relaxed italic">
                    "A cozy neighborhood gem! The aroma when you walk in is heavenly. Their seasonal fruit tarts are
                    works of art. Highly recommend!"
                  </p>
                  <p className="font-semibold">— Jennifer L.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <VoiceChatbotScript />

      <Footer />
    </div>
  )
}
