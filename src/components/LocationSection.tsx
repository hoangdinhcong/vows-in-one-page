
import React from "react";
import { MapPin, Clock, Calendar } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="bg-white relative">
      <div className="section-container">
        <h2 className="section-title">Join Our Celebration</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className="bg-muted p-8 md:p-12 rounded-lg fade-in" 
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex flex-col space-y-6">
              <div className="flex items-start">
                <Calendar className="mr-4 text-primary-foreground flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Date & Time</h3>
                  <p className="text-gray-600">September 25, 2024</p>
                  <p className="text-gray-600">4:00 PM - 10:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="mr-4 text-primary-foreground flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Venue</h3>
                  <p className="text-gray-600">The Bellevue Grand</p>
                  <p className="text-gray-600">123 Evergreen Avenue</p>
                  <p className="text-gray-600">San Francisco, CA 94109</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="mr-4 text-primary-foreground flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Schedule</h3>
                  <p className="text-gray-600">4:00 PM - Ceremony</p>
                  <p className="text-gray-600">5:30 PM - Cocktail Hour</p>
                  <p className="text-gray-600">6:30 PM - Reception</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948593!3d37.75781499645791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1618597933159!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
