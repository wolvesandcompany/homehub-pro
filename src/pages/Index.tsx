import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import heroImage from '@/assets/hero-home-services.jpg';
import { 
  Wrench, 
  Zap, 
  Thermometer, 
  Hammer, 
  Sparkles, 
  TreePine, 
  Bug, 
  Settings,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Phone,
  MapPin,
  Award,
  Users,
  TrendingUp
} from 'lucide-react';

const Index = () => {
  const services = [
    { icon: Wrench, title: 'Plumbing', description: 'Expert plumbing repairs and installations', emergency: true },
    { icon: Zap, title: 'Electrical', description: 'Licensed electrical services and repairs', emergency: true },
    { icon: Thermometer, title: 'HVAC', description: 'Heating and cooling system maintenance', emergency: true },
    { icon: Hammer, title: 'Handyman', description: 'General repairs and home improvements', emergency: false },
    { icon: Sparkles, title: 'Cleaning', description: 'Professional home and office cleaning', emergency: false },
    { icon: TreePine, title: 'Landscaping', description: 'Lawn care and landscape design', emergency: false },
    { icon: Bug, title: 'Pest Control', description: 'Safe and effective pest elimination', emergency: false },
    { icon: Settings, title: 'Appliance Repair', description: 'Fix all major home appliances', emergency: false },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Excellent service! They fixed our plumbing emergency within 2 hours. Professional and affordable.',
      service: 'Plumbing'
    },
    {
      name: 'Mike Thompson',
      rating: 5,
      text: 'HomeMax installed our new HVAC system perfectly. The team was knowledgeable and clean.',
      service: 'HVAC'
    },
    {
      name: 'Emily Chen',
      rating: 5,
      text: 'Best handyman service in the area. They completed all our repairs in one visit.',
      service: 'Handyman'
    }
  ];

  const stats = [
    { icon: Users, number: '15,000+', label: 'Happy Customers' },
    { icon: CheckCircle, number: '50,000+', label: 'Jobs Completed' },
    { icon: Award, number: '13+', label: 'Years Experience' },
    { icon: TrendingUp, number: '99%', label: 'Satisfaction Rate' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-charcoal/40" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container-custom">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Home Services
              <span className="block text-accent"> You Can Trust</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Licensed, insured, and available 24/7 for all your home service needs. 
              13+ years of trusted service in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="btn-hero text-lg px-8 py-4" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-charcoal text-lg px-8 py-4" asChild>
                <a href="tel:5551234357">Call (555) 123-HELP</a>
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-accent" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-accent" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive home services to keep your property running smoothly
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link key={index} to="/services" className="card-service group cursor-pointer block">
                <div className="p-6 text-center">
                  <div className="bg-gradient-to-r from-primary to-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-charcoal">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  {service.emergency && (
                    <Badge className="bg-secondary text-secondary-foreground">24/7 Emergency</Badge>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal">Why Choose HomeMax?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing exceptional service that exceeds your expectations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-primary to-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-service">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-charcoal">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.service} Service</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Serving Your <span className="text-accent">Neighborhood</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We proudly serve the greater metropolitan area with fast, reliable service. 
                No matter where you are, we're here to help.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>Downtown District</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>Suburban Areas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>Industrial Zone</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>Residential Communities</span>
                </div>
              </div>
              <Button className="btn-secondary" asChild>
                <Link to="/contact">Check Service Area</Link>
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Emergency Service Available</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <div className="font-semibold">(555) 123-HELP</div>
                    <div className="text-gray-300">24/7 Emergency Hotline</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Same-Day Service</div>
                    <div className="text-gray-300">Most repairs completed today</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Guaranteed Response</div>
                    <div className="text-gray-300">We'll be there when you need us</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Quote Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get Your Free Quote Today
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                No hidden fees, no surprises. Just honest, upfront pricing for quality work.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                  <span>Free in-home estimates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                  <span>Licensed & insured technicians</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                  <span>100% satisfaction guarantee</span>
                </div>
              </div>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
                <a href="tel:5551234357">Call (555) 123-HELP</a>
              </Button>
            </div>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">Request a Quote</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="First Name" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70" 
                    />
                    <Input 
                      placeholder="Last Name" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70" 
                    />
                  </div>
                  <Input 
                    placeholder="Email Address" 
                    type="email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70" 
                  />
                  <Input 
                    placeholder="Phone Number" 
                    type="tel"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70" 
                  />
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.title} value={service.title.toLowerCase()}>
                          {service.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Textarea 
                    placeholder="Describe your project or issue..." 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70 min-h-[100px]"
                  />
                  <Button type="submit" className="w-full btn-accent">
                    Get My Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
