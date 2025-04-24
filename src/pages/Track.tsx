import { useState } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { shipmentService } from '@/services/api';
import { Timeline } from '@/components/ui/Timeline';
import { Map } from '@/components/ui/Map';
import { Button } from '@/components/ui/Button';

export const Track = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSearched, setIsSearched] = useState(false);

  const { data: shipment, isLoading } = useQuery(
    ['shipment', trackingNumber],
    () => shipmentService.track(trackingNumber),
    {
      enabled: isSearched && !!trackingNumber,
      retry: false
    }
  );

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearched(true);
  };

  return (
    <div className="min-h-screen pt-20">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-primary text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Track Your Shipment
          </motion.h1>
          
          <form onSubmit={handleTrack} className="max-w-2xl">
            <div className="flex gap-4">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter tracking number"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800"
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Tracking...' : 'Track'}
              </Button>
            </div>
          </form>
        </div>
      </motion.section>

      {isSearched && shipment && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-12"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Shipment Details</h2>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <Timeline events={shipment.events} />
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Live Location</h2>
                <div className="bg-white rounded-lg shadow-lg p-6 h-[400px]">
                  <Map location={shipment.currentLocation} />
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </div>
  );
}; 