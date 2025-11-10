import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { VoiceChatbotScript } from "@/components/voice-chatbot-script"

export default function MenuPage() {
  const menuCategories = [
    {
      title: "Artisan Breads",
      description: "Handcrafted daily using traditional techniques and natural fermentation",
      items: [
        {
          name: "Classic Sourdough",
          description: "Our signature 48-hour fermented sourdough with a crispy crust and tangy flavor",
          price: "$8.50",
        },
        {
          name: "Whole Wheat Honey Loaf",
          description: "Hearty whole grain bread sweetened with local wildflower honey",
          price: "$7.50",
        },
        {
          name: "Rustic Baguette",
          description: "Traditional French baguette with a golden crust and airy interior",
          price: "$5.00",
        },
        {
          name: "Olive Rosemary Focaccia",
          description: "Italian flatbread topped with Kalamata olives and fresh rosemary",
          price: "$9.00",
        },
        {
          name: "Multigrain Seeded Loaf",
          description: "Packed with sunflower, pumpkin, and flax seeds for extra nutrition",
          price: "$8.00",
        },
        {
          name: "Cinnamon Raisin Swirl",
          description: "Sweet bread swirled with cinnamon sugar and plump raisins",
          price: "$7.00",
        },
      ],
    },
    {
      title: "Pastries & Viennoiserie",
      description: "Buttery, flaky pastries made with European-style butter and patience",
      items: [
        {
          name: "Butter Croissant",
          description: "27 delicate layers of buttery perfection, baked until golden",
          price: "$4.50",
        },
        {
          name: "Almond Croissant",
          description: "Filled with almond cream and topped with sliced almonds",
          price: "$5.50",
        },
        {
          name: "Chocolate Croissant (Pain au Chocolat)",
          description: "Flaky croissant dough wrapped around dark chocolate batons",
          price: "$5.00",
        },
        {
          name: "Apple Turnover",
          description: "Spiced apple filling in golden puff pastry with vanilla glaze",
          price: "$4.75",
        },
        {
          name: "Cheese Danish",
          description: "Sweet cream cheese filling on buttery Danish pastry",
          price: "$4.50",
        },
        {
          name: "Blueberry Scone",
          description: "Tender scone studded with fresh blueberries and lemon zest",
          price: "$4.00",
        },
      ],
    },
    {
      title: "Sweet Treats",
      description: "Indulgent desserts and confections for every sweet tooth",
      items: [
        {
          name: "Cinnamon Roll",
          description: "Soft, pillowy roll with cinnamon sugar and cream cheese frosting",
          price: "$5.50",
        },
        {
          name: "Chocolate Chip Cookie",
          description: "Chewy center, crispy edges, loaded with Belgian chocolate chips",
          price: "$3.50",
        },
        {
          name: "Lemon Tart",
          description: "Tangy lemon curd in a buttery shortbread crust",
          price: "$6.00",
        },
        {
          name: "Seasonal Fruit Tart",
          description: "Vanilla custard topped with fresh seasonal fruits (changes weekly)",
          price: "$7.00",
        },
        {
          name: "Brownie",
          description: "Fudgy chocolate brownie with a crackly top",
          price: "$4.50",
        },
        {
          name: "Macarons (Box of 6)",
          description: "Delicate French macarons in rotating flavors",
          price: "$12.00",
        },
      ],
    },
    {
      title: "Specialty Items",
      description: "Unique creations and seasonal offerings that showcase our creativity",
      items: [
        {
          name: "Kouign-Amann",
          description: "Caramelized Breton pastry with layers of butter and sugar",
          price: "$6.50",
        },
        {
          name: "Morning Bun",
          description: "Croissant dough rolled with cinnamon sugar and orange zest",
          price: "$5.00",
        },
        {
          name: "Savory Quiche (Slice)",
          description: "Daily rotating flavors with farm-fresh eggs and local vegetables",
          price: "$7.50",
        },
        {
          name: "Brioche Loaf",
          description: "Rich, eggy bread perfect for French toast or sandwiches",
          price: "$9.50",
        },
        {
          name: "Pretzel Roll (4-pack)",
          description: "Soft pretzels with coarse salt, perfect for sandwiches",
          price: "$8.00",
        },
        {
          name: "Seasonal Pie (Whole)",
          description: "Made-to-order fruit pies with all-butter crust (24hr notice)",
          price: "$28.00",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4">Our Menu</h1>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Every item on our menu is crafted with care, using time-honored techniques and the finest ingredients. We
              bake fresh throughout the day to ensure you always get the best quality. Prices and availability may vary
              by season.
            </p>
          </div>
        </section>

        {/* Menu Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {menuCategories.map((category, idx) => (
                <div key={idx}>
                  <div className="mb-8">
                    <h2 className="font-serif text-4xl font-bold text-primary mb-2">{category.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{category.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {category.items.map((item, itemIdx) => (
                      <Card key={itemIdx} className="hover:border-accent transition-colors">
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-serif text-xl font-bold text-foreground">{item.name}</h3>
                            <span className="text-accent font-semibold text-lg ml-4 flex-shrink-0">{item.price}</span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Notes Section */}
        <section className="py-16 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Special Orders</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Planning a celebration? We offer custom cakes, specialty breads, and large quantity orders for
                    events. Give us at least 48 hours notice for special orders, and we'll create something memorable
                    for your occasion.
                  </p>
                  <p className="text-muted-foreground">
                    Call us at <span className="font-semibold text-accent">(555) 123-4567</span> to discuss your needs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Dietary Accommodations</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    We understand dietary restrictions and offer several options including gluten-free bread (baked in a
                    separate area), vegan pastries, and sugar-free treats. Ask our staff about today's special dietary
                    options.
                  </p>
                  <p className="text-muted-foreground">
                    Please note: While we take precautions, our kitchen does handle common allergens.
                  </p>
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
