import { Clock, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">The Golden Crust</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Your neighborhood bakery, serving fresh artisan bread and pastries since 2015. Every item is baked with
              love and the finest ingredients.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Monday - Friday: 6:00 AM - 7:00 PM</p>
                  <p>Saturday: 7:00 AM - 8:00 PM</p>
                  <p>Sunday: 7:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  123 Maple Street
                  <br />
                  Riverside, CA 92501
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} The Golden Crust Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
