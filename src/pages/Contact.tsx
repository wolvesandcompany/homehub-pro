import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import Layout from '@/components/Layout';
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  MessageSquare,
  Calendar,
  Shield,
  Star,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    urgency: '',
    address: '',
    zipCode: '',
    message: ''
  });

  const services = [
    'Plumbing',
    'Electrical',
    'HVAC',
    'Handyman',
    'Cleaning',
    'Landscaping',
    'Pest Control',
    'Appliance Repair'
  ];

  const urgencyOptions = [
    { value: 'emergency', label: 'Emergency (24/7)', description: 'Immediate response needed' },
    { value: 'urgent', label: 'Urgent (Same Day)', description: 'Within 24 hours' },
    { value: 'scheduled', label: 'Scheduled Service', description: 'Plan for this week' },
    { value: 'flexible', label: 'Flexible Timing', description: 'No rush, best price' }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: '24/7 Emergency Hotline',
      primary: '(555) 123-HELP',
      secondary: 'Available anytime for urgent issues',
      action: 'tel:5551234357'
    },
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'info@homemax.com',
      secondary: 'Free estimates within 2 hours',
      action: 'mailto:info@homemax.com'
    },
    {
      icon: MapPin,
      title: 'Service Areas',
      primary: 'Greater Metro Area',
      secondary: 'All neighborhoods served',
      action: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      primary: 'Mon-Fri: 7AM-7PM',
      secondary: 'Weekends: 8AM-5PM',
      action: null
    }
  ];

  const serviceAreas = [
    'Downtown District',
    'Suburban Areas',
    'Industrial Zone',
    'Residential Communities',
    'Historic District',
    'Waterfront Area',
    'Business Park',
    'University Area'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-charcoal">
              Contact <span className="text-primary">HomeMax Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Ready to get started? Contact us for a free estimate or emergency service. 
              We're here to help 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero" asChild>
                <a href="tel:5551234357">Call Emergency Line</a>
              </Button>
              <Button size="lg" variant="outline">
                <MessageSquare className="h-5 w-5 mr-2" />
                Live Chat Available
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-secondary text-secondary-foreground py-4">
        <div className="container-custom">
          <div className="flex items-center justify-center space-x-4 text-center">
            <AlertCircle className="h-6 w-6" />
            <span className="font-semibold">Emergency? Don't wait!</span>
            <span>•</span>
            <span>Call now for immediate assistance</span>
            <Phone className="h-5 w-5" />
            <a href="tel:5551234357" className="font-bold hover:underline">(555) 123-HELP</a>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-charcoal">Get In Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    Multiple ways to reach us for your convenience. Choose what works best for you.
                  </p>
                </div>

                {contactInfo.map((contact, index) => (
                  <Card key={index} className="card-service">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-r from-primary to-primary-light w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                          <contact.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-charcoal mb-1">{contact.title}</h3>
                          {contact.action ? (
                            <a 
                              href={contact.action} 
                              className="text-lg font-bold text-primary hover:text-primary-light block"
                            >
                              {contact.primary}
                            </a>
                          ) : (
                            <div className="text-lg font-bold text-charcoal">{contact.primary}</div>
                          )}
                          <p className="text-sm text-muted-foreground">{contact.secondary}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Trust Indicators */}
                <Card className="card-service bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-charcoal mb-4">Why Choose HomeMax?</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Shield className="h-5 w-5 text-primary" />
                        <span className="text-sm">Licensed & Insured</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star className="h-5 w-5 text-primary" />
                        <span className="text-sm">4.9/5 Customer Rating</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">Satisfaction Guaranteed</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <span className="text-sm">Same-Day Service Available</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-service">
                <CardHeader>
                  <CardTitle className="text-2xl text-charcoal">Request Free Quote</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 2 hours with a detailed estimate.
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="service">Service Needed *</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service.toLowerCase()}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="urgency">Timeline *</Label>
                        <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            {urgencyOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                <div>
                                  <div className="font-medium">{option.label}</div>
                                  <div className="text-xs text-muted-foreground">{option.description}</div>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="address">Service Address</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          placeholder="123 Main Street"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code *</Label>
                        <Input
                          id="zipCode"
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange('zipCode', e.target.value)}
                          placeholder="12345"
                          required
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">Project Description *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Please describe your project or issue in detail..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    {/* Submit */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button type="submit" size="lg" className="btn-hero flex-1">
                        <Calendar className="h-5 w-5 mr-2" />
                        Get Free Quote
                      </Button>
                      <Button type="button" size="lg" variant="outline" className="flex-1" asChild>
                        <a href="tel:5551234357">
                          <Phone className="h-5 w-5 mr-2" />
                          Call Instead
                        </a>
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground text-center">
                      * Required fields. We typically respond within 2 hours during business hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Service Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We proudly serve the entire metropolitan area. Check if we serve your location.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="flex items-center space-x-3 bg-background rounded-lg p-4 shadow-soft">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium text-charcoal">{area}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Don't see your area listed? Contact us anyway - we may still be able to help!
            </p>
            <Button variant="outline" asChild>
              <a href="tel:5551234357">Check Service Availability</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="card-service">
              <CardContent className="p-6">
                <h3 className="font-semibold text-charcoal mb-2">How quickly can you respond?</h3>
                <p className="text-muted-foreground">
                  Emergency calls are answered 24/7 with same-day service. Regular appointments typically within 1-2 days.
                </p>
              </CardContent>
            </Card>
            <Card className="card-service">
              <CardContent className="p-6">
                <h3 className="font-semibold text-charcoal mb-2">Do you provide free estimates?</h3>
                <p className="text-muted-foreground">
                  Yes! All estimates are completely free with no obligation. We provide upfront pricing before any work begins.
                </p>
              </CardContent>
            </Card>
            <Card className="card-service">
              <CardContent className="p-6">
                <h3 className="font-semibold text-charcoal mb-2">Are you licensed and insured?</h3>
                <p className="text-muted-foreground">
                  Absolutely. We're fully licensed and carry $2M in liability insurance for your complete peace of mind.
                </p>
              </CardContent>
            </Card>
            <Card className="card-service">
              <CardContent className="p-6">
                <h3 className="font-semibold text-charcoal mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept cash, check, and all major credit cards. Financing options available for larger projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;