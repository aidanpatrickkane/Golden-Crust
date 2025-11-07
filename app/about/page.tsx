import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Phone, MapPin, Mail } from "lucide-react"

export default function AboutPage() {
  const faqs = [
    {
      question: "Do you take custom orders?",
      answer:
        "Yes! We love creating custom cakes, specialty breads, and large orders for events. Please give us at least 48 hours notice for custom orders. For wedding cakes and large events, we recommend contacting us 2-3 weeks in advance. Call us at (555) 123-4567 or visit us in person to discuss your vision.",
    },
    {
      question: "Do you offer gluten-free or vegan options?",
      answer:
        "We bake gluten-free bread daily in a separate area to minimize cross-contamination. We also offer several vegan pastries and can accommodate most dietary restrictions with advance notice. Our staff can guide you through available options each day. Please note that while we take precautions, our kitchen does handle common allergens.",
    },
    {
      question: "What time do you start baking?",
      answer:
        "Our dedicated bakers arrive at 4:00 AM every morning to begin the baking process. Fresh bread starts coming out of the ovens around 6:00 AM when we open. We continue baking throughout the day to ensure freshness, with pastries being restocked mid-morning and fresh bread available until early evening.",
    },
    {
      question: "Can I place an order for pickup?",
      answer:
        "Yes! You can call us at (555) 123-4567 to place a pickup order. For same-day orders, please call before 2:00 PM. For larger orders or specialty items, we appreciate 24-48 hours notice. We're also working on an online ordering system that will launch soon!",
    },
    {
      question: "Do you have seating or coffee available?",
      answer:
        "We have a cozy seating area with 8 tables where you can enjoy your treats. We serve freshly brewed coffee, espresso drinks, tea, and hot chocolate. Our coffee beans are locally roasted by Riverside Coffee Roasters. It's the perfect spot to relax with a pastry and your favorite beverage.",
    },
    {
      question: "What makes your sourdough special?",
      answer:
        "Our sourdough is made with a 10-year-old starter that we feed and maintain daily. We use a long, slow fermentation process (48 hours) that develops complex flavors and makes the bread easier to digest. The starter gives our sourdough its distinctive tangy flavor and creates that perfect crispy crust with a chewy interior.",
    },
    {
      question: "Do you deliver?",
      answer:
        "Currently, we don't offer delivery service, but we do offer convenient pickup orders. We're located in the heart of downtown Riverside with plenty of street parking available. We partner with local delivery services for catering orders over $100.",
    },
    {
      question: "Are your ingredients locally sourced?",
      answer:
        "We're committed to supporting local farmers and producers. Our flour comes from a mill in Central California, our butter and eggs are from local dairies and farms, and we source seasonal fruits from nearby orchards. We believe in knowing where our ingredients come from and supporting our community.",
    },
    {
      question: "Do you offer baking classes?",
      answer:
        "Yes! We host monthly baking workshops where you can learn techniques like sourdough bread making, croissant lamination, and pastry basics. Classes are limited to 8 participants for hands-on learning. Check our social media or call us for the current schedule and to reserve your spot.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, all major credit cards (Visa, Mastercard, American Express, Discover), and contactless payments including Apple Pay and Google Pay. We also offer a loyalty card program—buy 10 items, get your 11th free!",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4">About Us</h1>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              A neighborhood bakery built on tradition, quality, and community
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-4xl font-bold text-primary mb-6">Our Story</h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    The Golden Crust was born from a simple dream: to bring authentic, artisan-baked goods to our
                    beloved Riverside community. Founded in 2015 by master baker Elena Martinez, our bakery has become a
                    cherished neighborhood gathering place where the aroma of fresh bread welcomes you each morning.
                  </p>
                  <p>
                    Elena learned her craft in a small village bakery in France, where she spent five years mastering
                    traditional techniques passed down through generations. She returned home with a 10-year-old
                    sourdough starter (which we still use today!) and a passion for creating bread that brings people
                    together.
                  </p>
                  <p>
                    What started as a small operation with just Elena and two ovens has grown into a team of eight
                    dedicated bakers and staff. Despite our growth, we've never compromised on quality or our commitment
                    to handcrafted excellence. Every loaf, every pastry, every cookie is made with the same care and
                    attention as day one.
                  </p>
                  <p>
                    We believe in supporting our local community—from sourcing ingredients from nearby farms to
                    providing a warm space where neighbors become friends. Thank you for being part of our story and
                    allowing us to be part of yours.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <img src="/baker-kneading-dough-in-artisan-bakery.jpg" alt="Baker at work" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-bold text-center text-primary mb-12">Visit Us</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    123 Maple Street
                    <br />
                    Riverside, CA 92501
                    <br />
                    <span className="text-sm">(Corner of Maple & Oak)</span>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Hours</h3>
                  <div className="text-muted-foreground text-sm leading-relaxed">
                    <p>Mon-Fri: 6:00 AM - 7:00 PM</p>
                    <p>Saturday: 7:00 AM - 8:00 PM</p>
                    <p>Sunday: 7:00 AM - 6:00 PM</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    (555) 123-4567
                    <br />
                    <span className="text-sm">Call for orders & inquiries</span>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    hello@goldencrust.com
                    <br />
                    <span className="text-sm">We'll respond within 24 hours</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-bold text-center text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-center text-muted-foreground mb-12 leading-relaxed">
              Have a question? We've compiled answers to our most common inquiries below. If you don't see your question
              here, feel free to give us a call!
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-16 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl font-bold text-primary mb-6">Part of the Community</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                We're proud to be more than just a bakery—we're a community hub. We donate day-old bread to local food
                banks, sponsor youth sports teams, and host monthly "Community Coffee" mornings where neighbors can
                gather and connect.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Every purchase you make helps us give back to the community that has supported us from day one. Thank
                you for choosing The Golden Crust and being part of our extended family.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
