import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Clock, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const Emergency = () => {
  const benefits = [
    { icon: Clock, title: 'Fast Response', desc: 'Technicians dispatched immediately for urgent issues.' },
    { icon: Phone, title: '24/7 Hotline', desc: 'Call us anytime, day or night for emergencies.' },
    { icon: Shield, title: 'Trusted Pros', desc: 'Licensed, insured, and background-checked experts.' },
  ];

  const situations = [
    'Burst or leaking pipes',
    'Power outages or sparking outlets',
    'No heat or AC in extreme weather',
    'Sewage backups or severe clogs',
    'Gas smells or suspected leaks (call 911 first)',
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-red-500/10 to-primary/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-charcoal">Emergency Service</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Immediate help for urgent home issues. Our on-call team is ready 24/7 to protect your home and family.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="btn-hero" asChild>
                  <a href="tel:5551234357">Call (555) 123-HELP</a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
                  <Link to="/contact">Request Urgent Callback</Link>
                </Button>
              </div>
              <div className="mt-4 flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Average response time under 60 minutes</span>
              </div>
            </div>
            <Card className="bg-white">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-charcoal flex items-center"><AlertTriangle className="h-6 w-6 text-red-500 mr-2" /> When to call emergency</h2>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {situations.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <Card key={i} className="card-service">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary-light text-white flex items-center justify-center mb-3">
                    <b.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-1">{b.title}</h3>
                  <p className="text-muted-foreground">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help Right Now?</h2>
          <p className="text-lg text-gray-300 mb-6">Our emergency team is standing by 24/7.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
              <a href="tel:5551234357">Call (555) 123-HELP</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal" asChild>
              <Link to="/contact">Message Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Emergency; 