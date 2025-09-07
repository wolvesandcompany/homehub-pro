import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import { 
  Award,
  Shield,
  Users,
  Clock,
  CheckCircle,
  Star,
  Phone,
  TrendingUp,
  Heart,
  Wrench,
  Home
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '15,000+', label: 'Happy Customers' },
    { icon: CheckCircle, number: '50,000+', label: 'Jobs Completed' },
    { icon: Award, number: '13+', label: 'Years Experience' },
    { icon: Star, number: '4.9/5', label: 'Average Rating' }
  ];

  const teamMembers = [
    {
      name: 'Michael Rodriguez',
      role: 'Founder & Master Plumber',
      experience: '15+ years',
      certifications: ['Licensed Master Plumber', 'EPA Certified', 'OSHA Safety Certified'],
      bio: 'Founded HomeMax with a vision to provide honest, reliable home services to every family in our community.'
    },
    {
      name: 'Sarah Thompson',
      role: 'Lead Electrician',
      experience: '12+ years',
      certifications: ['Licensed Master Electrician', 'Solar Installation Certified', 'Smart Home Specialist'],
      bio: 'Specializes in residential electrical systems and smart home technology installations.'
    },
    {
      name: 'David Chen',
      role: 'HVAC Specialist',
      experience: '10+ years',
      certifications: ['EPA Section 608 Certified', 'NATE Certified', 'Energy Star Partner'],
      bio: 'Expert in heating and cooling systems with a focus on energy efficiency and cost savings.'
    },
    {
      name: 'Lisa Martinez',
      role: 'Customer Service Manager',
      experience: '8+ years',
      certifications: ['Customer Service Excellence', 'Project Management Certified'],
      bio: 'Ensures every customer receives exceptional service from initial contact to job completion.'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'We believe in honest communication, transparent pricing, and doing what we say we\'ll do.'
    },
    {
      icon: Heart,
      title: 'Community Focus',
      description: 'As local residents, we\'re invested in our community and treat every home like our own.'
    },
    {
      icon: Award,
      title: 'Quality Craftsmanship',
      description: 'We take pride in our work and stand behind every service with our satisfaction guarantee.'
    },
    {
      icon: Clock,
      title: 'Reliable Service',
      description: 'When we say we\'ll be there, we will. Your time is valuable and we respect that.'
    }
  ];

  const certifications = [
    'Better Business Bureau A+ Rating',
    'Licensed & Bonded in All Service Areas',
    'Fully Insured with $2M Liability Coverage',
    'EPA Certified for Environmental Safety',
    'OSHA Compliant Safety Standards',
    'HomeAdvisor Elite Service Provider'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-charcoal">
                About <span className="text-primary">HomeMax Services</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                For over 13 years, we've been your trusted partner for professional home services. 
                Our mission is simple: provide exceptional service that exceeds expectations while 
                building lasting relationships in our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-hero" asChild>
                  <Link to="/contact">Get Quote</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
                  <a href="tel:5551234357">Call (555) 123-HELP</a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="card-service text-center">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-r from-primary to-primary-light w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Built on a foundation of trust, quality, and community service
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-charcoal">Founded on Family Values</h3>
                <p className="text-muted-foreground mb-6">
                  HomeMax Services was founded in 2010 by Michael Rodriguez, a master plumber who 
                  recognized the need for honest, reliable home services in our community. What started 
                  as a one-man operation has grown into a full-service home maintenance company, but 
                  our core values remain unchanged.
                </p>
                <p className="text-muted-foreground mb-6">
                  We believe that your home is your sanctuary, and it deserves to be maintained by 
                  professionals who care as much about it as you do. Every member of our team is 
                  carefully selected not just for their technical skills, but for their commitment 
                  to customer service and integrity.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-charcoal">2010</div>
                    <div className="text-muted-foreground">Founded as Rodriguez Plumbing</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-charcoal">2015</div>
                    <div className="text-muted-foreground">Expanded to electrical and HVAC services</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-charcoal">2018</div>
                    <div className="text-muted-foreground">Rebranded to HomeMax Services</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-charcoal">2023</div>
                    <div className="text-muted-foreground">Reached 15,000+ satisfied customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and every interaction we have
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-service text-center">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-primary to-primary-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-charcoal">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to providing exceptional service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-service">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-primary to-primary-light w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1 text-charcoal">{member.name}</h3>
                      <p className="text-primary font-medium mb-2">{member.role}</p>
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge variant="outline">{member.experience}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{member.bio}</p>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-charcoal">Certifications:</p>
                        {member.certifications.map((cert, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm text-muted-foreground">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Awards</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Recognition and credentials that demonstrate our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/10 rounded-lg p-4">
                <Award className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="text-white">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the HomeMax Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust HomeMax for all their home service needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-accent hover:bg-white hover:text-primary" asChild>
              <a href="tel:5551234357">Call (555) 123-HELP</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;