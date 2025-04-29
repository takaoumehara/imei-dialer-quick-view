
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ImeiInfoAccordion from "@/components/ImeiInfoAccordion";

const Index = () => {
  const { toast } = useToast();

  const dialImeiCode = () => {
    try {
      window.location.href = "tel:*%2306%23";
      toast({
        title: "Dialing IMEI code",
        description: "Your phone app should open automatically",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not open dialer app",
        variant: "destructive",
      });
      console.error("Error opening phone dialer:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-md mx-auto pt-10">
        <Card className="border-2 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-blue-700">IMEI Quick Dial</CardTitle>
            <CardDescription>
              Check your phone's unique identification number
            </CardDescription>
          </CardHeader>
          
          <CardContent className="flex flex-col items-center">
            <Button 
              onClick={dialImeiCode}
              size="lg" 
              className="h-24 w-24 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg transition-all hover:scale-105"
              aria-label="Dial IMEI code *#06#"
            >
              <div className="flex flex-col items-center">
                <Phone size={32} className="mb-1" />
                <span className="text-xs font-mono">*#06#</span>
              </div>
            </Button>
            
            <p className="mt-6 text-center text-sm text-gray-500">
              Tap the button above to dial the IMEI code and view your device's unique identifier
            </p>
          </CardContent>
          
          <CardFooter className="flex flex-col">
            <ImeiInfoAccordion />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Index;
