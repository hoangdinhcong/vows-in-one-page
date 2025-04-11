
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const RsvpSection = () => {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "RSVP Submitted",
        description: `Thank you, ${name}! Your RSVP has been received.`,
      });
      
      setName("");
      setAttending(null);
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="rsvp" className="bg-primary/20">
      <div className="section-container max-w-md mx-auto">
        <h2 className="section-title">RSVP</h2>
        
        <div 
          className="bg-white p-8 rounded-lg shadow-sm fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Your full name"
                required
              />
            </div>
            
            <div className="mb-8">
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Will you be attending?
              </p>
              
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setAttending(true)}
                  className={`flex-1 py-2 px-4 border rounded-md transition-all ${
                    attending === true
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  Yes, I'll be there
                </button>
                
                <button
                  type="button"
                  onClick={() => setAttending(false)}
                  className={`flex-1 py-2 px-4 border rounded-md transition-all ${
                    attending === false
                      ? "bg-gray-100 border-gray-300"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  Sorry, I can't come
                </button>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={!name || attending === null || loading}
              className="w-full button-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit RSVP"}
            </button>
          </form>
        </div>

        <div className="text-center mt-12 text-gray-600 fade-in" style={{ animationDelay: "0.4s" }}>
          <p>Please RSVP by August 25, 2024</p>
          <p className="mt-2">For any questions, contact us at:</p>
          <p className="font-medium">hello@alextaylor.wedding</p>
        </div>
      </div>
    </section>
  );
};

export default RsvpSection;
