import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import { 
  Wrench, 
  Zap, 
  Thermometer, 
  Hammer, 
  Sparkles, 
  TreePine, 
  Bug, 
  Settings,
  Clock,
  CheckCircle,
  Phone,
  DollarSign,
  Shield
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Plumbing Services',
      description: 'Expert plumbing repairs, installations, and maintenance',
      emergency: true,
      features: [
        'Leak repairs and pipe replacement',
        'Drain cleaning and unclogging',
        'Toilet and faucet installation',
        'Water heater repair/replacement',
        'Emergency plumbing repairs'
      ],
      priceRange: '$75-$200/hour',
      emergencyAvailable: true
    },
    {
      icon: Zap,
      title: 'Electrical Services',
      description: 'Licensed electrical work for home and business',
      emergency: true,
      features: [
        'Outlet and switch installation',
        'Panel upgrades and repairs',
        'Lighting installation',
        'Electrical troubleshooting',
        'Code compliance updates'
      ],
      priceRange: '$85-$250/hour',
      emergencyAvailable: true
    },
    {
      icon: Thermometer,
      title: 'HVAC Services',
      description: 'Heating and cooling system maintenance and repair',
      emergency: true,
      features: [
        'AC installation and repair',
        'Furnace maintenance',
        'Duct cleaning and sealing',
        'Thermostat installation',
        'Energy efficiency audits'
      ],
      priceRange: '$95-$300/hour',
      emergencyAvailable: true
    },
    {
      icon: Hammer,
      title: 'Handyman Services',
      description: 'General repairs and home improvement projects',
      emergency: false,
      features: [
        'Furniture assembly',
        'Drywall repair and painting',
        'Door and window repairs',
        'Shelving installation',
        'General maintenance'
      ],
      priceRange: '$50-$150/hour',
      emergencyAvailable: false
    },
    {
      icon: Sparkles,
      title: 'Cleaning Services',
      description: 'Professional residential and commercial cleaning',
      emergency: false,
      features: [
        'Deep house cleaning',
        'Post-construction cleanup',
        'Move-in/move-out cleaning',
        'Regular maintenance cleaning',
        'Carpet and upholstery cleaning'
      ],
      priceRange: '$25-$50/hour',
      emergencyAvailable: false
    },
    {
      icon: TreePine,
      title: 'Landscaping Services',
      description: 'Complete lawn care and landscape design',
      emergency: false,
      features: [
        'Lawn mowing and edging',
        'Tree trimming and removal',
        'Garden design and planting',
        'Irrigation system installation',
        'Seasonal yard cleanup'
      ],
      priceRange: '$40-$100/hour',
      emergencyAvailable: false
    },
    {
      icon: Bug,
      title: 'Pest Control',
      description: 'Safe and effective pest elimination',
      emergency: false,
      features: [
        'Residential pest inspection',
        'Termite treatment',
        'Rodent control',
        'Insect elimination',
        'Preventive pest management'
      ],
      priceRange: '$100-$300/visit',
      emergencyAvailable: false
    },
    {
      icon: Settings,
      title: 'Appliance Repair',
      description: 'Repair services for all major home appliances',
      emergency: false,
      features: [
        'Refrigerator and freezer repair',
        'Washer and dryer service',
        'Dishwasher repair',
        'Oven and stovetop repair',
        'Small appliance repair'
      ],
      priceRange: '$75-$200/hour',
      emergencyAvailable: false
    }
  ];

  const emergencyServices = services.filter(service => service.emergency);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-charcoal">
              Professional <span className="text-primary">Home Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Comprehensive home maintenance and repair services you can trust. 
              Licensed, insured, and guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:5551234357">Call (555) 123-HELP</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Banner */}
      <section className="bg-secondary text-secondary-foreground py-4">
        <div className="container-custom">
          <div className="flex items-center justify-center space-x-4 text-center">
            <Clock className="h-6 w-6" />
            <span className="font-semibold">24/7 Emergency Service Available</span>
            <span>•</span>
            <span>Same-Day Response Guaranteed</span>
            <Phone className="h-5 w-5" />
            <a href="tel:5551234357" className="font-bold hover:underline">(555) 123-HELP</a>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Emergency Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              When emergencies strike, we're here 24/7 to help restore your home quickly and safely.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {emergencyServices.map((service, index) => (
              <Card key={index} className="card-service border-secondary/20">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-secondary to-secondary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center text-charcoal">{service.title}</h3>
                  <p className="text-muted-foreground text-center mb-4">{service.description}</p>
                  <div className="flex justify-center">
                    <Badge className="bg-secondary text-secondary-foreground">24/7 Available</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">All Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete home maintenance solutions from trusted professionals
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-service">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-primary to-primary-light w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-semibold text-charcoal">{service.title}</h3>
                        {service.emergencyAvailable && (
                          <Badge className="bg-secondary text-secondary-foreground">24/7</Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-5 w-5 text-accent" />
                          <span className="font-semibold text-charcoal">{service.priceRange}</span>
                        </div>
                        <Button className="btn-secondary" asChild>
                          <Link to="/contact">Book Service</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Why Choose Our Services?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary to-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-charcoal">Licensed & Insured</h3>
              <p className="text-muted-foreground">All our technicians are fully licensed and insured for your peace of mind.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary to-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-charcoal">Satisfaction Guaranteed</h3>
              <p className="text-muted-foreground">We stand behind our work with a 100% satisfaction guarantee.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary to-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-charcoal">Upfront Pricing</h3>
              <p className="text-muted-foreground">No hidden fees or surprise charges. You'll know the cost before we start.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on any of our services. We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="tel:5551234357">Call Now: (555) 123-HELP</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;