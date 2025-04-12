
import React, { useState } from "react";
import { Copy, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

const GiftsSection = () => {
  const bankDetails = {
    bride: [
      { label: "Ngân Hàng", value: "Techcombank" },
      { label: "Chủ Tài Khoản", value: "Mỹ Duyên" },
      { label: "Số Tài Khoản", value: "19036505201019" },
    ],
    groom: [
      { label: "Ngân Hàng", value: "Vietcombank" },
      { label: "Chủ Tài Khoản", value: "Hoàng Công" },
      { label: "Số Tài Khoản", value: "1023456789" },
    ]
  };

  const qrCodes = {
    bride: "https://images.unsplash.com/photo-1610202631408-fa6492863d23?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
    groom: "https://images.unsplash.com/photo-1610202631408-fa6492863d23?ixlib=rb-4.0.3&auto=format&fit=crop&w=600"
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast({
          title: "Đã sao chép!",
          description: `${label} đã được sao chép.`,
        });
      },
      (err) => {
        console.error("Không thể sao chép văn bản: ", err);
      }
    );
  };

  return (
    <section id="gifts" className="bg-accent/20">
      <div className="section-container">
        <h2 className="section-title">Mừng Cưới</h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-gray-600 mb-10">
            Sự hiện diện của bạn trong ngày cưới của chúng tôi là món quà quý giá nhất. Nếu bạn muốn gửi tặng món quà mừng cưới, chúng tôi đã chia sẻ thông tin tài khoản ngân hàng bên dưới.
          </p>
          
          <div className="flex justify-center gap-4 mb-10">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Gift size={16} />
                  Cô Dâu
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center">Thông Tin Ngân Hàng Cô Dâu</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col sm:flex-row items-center gap-6 p-4">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <img 
                      src={qrCodes.bride}
                      alt="QR Code Cô Dâu"
                      className="w-full max-w-[200px] rounded"
                    />
                    <p className="text-center text-sm text-gray-500 mt-2">
                      Quét để chuyển khoản cho Cô Dâu
                    </p>
                  </div>
                  <div className="space-y-4 flex-1">
                    {bankDetails.bride.map((detail, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">{detail.label}</p>
                          <p className="font-medium">{detail.value}</p>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => copyToClipboard(detail.value, detail.label)}
                        >
                          <Copy size={16} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Gift size={16} />
                  Chú Rể
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center">Thông Tin Ngân Hàng Chú Rể</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col sm:flex-row items-center gap-6 p-4">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <img 
                      src={qrCodes.groom}
                      alt="QR Code Chú Rể"
                      className="w-full max-w-[200px] rounded"
                    />
                    <p className="text-center text-sm text-gray-500 mt-2">
                      Quét để chuyển khoản cho Chú Rể
                    </p>
                  </div>
                  <div className="space-y-4 flex-1">
                    {bankDetails.groom.map((detail, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">{detail.label}</p>
                          <p className="font-medium">{detail.value}</p>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => copyToClipboard(detail.value, detail.label)}
                        >
                          <Copy size={16} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="text-center text-gray-500 italic">
            Vui lòng chọn "Cô Dâu" hoặc "Chú Rể" để xem thông tin chuyển khoản
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftsSection;
