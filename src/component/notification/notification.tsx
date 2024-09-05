import React, { useState } from 'react';
import { Bell, MessageCircle, Package, Mail, Truck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';

const NotificationItem = ({ icon, title, description, time }) => (
  <div className="flex items-start space-x-4 mb-4">
    <div className="bg-blue-100 p-2 rounded-full">
      {icon}
    </div>
    <div className="flex-1">
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-500">{description}</p>
      <p className="text-xs text-gray-400 mt-1">{time}</p>
    </div>
  </div>
);

const NotificationComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [notifications] = useState([
    {
      id: 1,
      icon: <Avatar src="/img/avatar.jpg" alt="Sadou Mokaté" />,
      title: "Sadou Mokaté answered to your comment on the minimal",
      description: "",
      time: "07 Sep 2020",
      isNew: true
    },
    {
      id: 2,
      icon: <Package className="h-4 w-4 text-yellow-500" />,
      title: "Your order is placed",
      description: "waiting for shipping",
      time: "07 Sep 2020",
      isNew: true
    },
    {
      id: 3,
      icon: <MessageCircle className="h-4 w-4 text-blue-500" />,
      title: "You have new message",
      description: "5 unread messages",
      time: "07 Sep 2020",
      isNew: false
    },
    {
      id: 4,
      icon: <Mail className="h-4 w-4 text-red-500" />,
      title: "You have new mail",
      description: "sent from guido padberg",
      time: "07 Sep 2020",
      isNew: false
    },
    {
      id: 5,
      icon: <Truck className="h-4 w-4 text-green-500" />,
      title: "Delivery processing",
      description: "your order is being shipped",
      time: "07 Sep 2020",
      isNew: false
    }
  ]);

  const unreadCount = notifications.filter(n => n.isNew).length;

  return (
    <div className="relative">
     
      {isOpen && (
        <Card className="absolute right-0 mt-2 w-80 max-h-[90vh] overflow-y-auto">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex justify-between items-center">
              Notifications
              <span className="text-sm text-green-500">✓</span>
            </CardTitle>
            <p className="text-sm text-gray-500">You have {unreadCount} unread messages</p>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <h3 className="text-xs font-semibold text-gray-400 mb-2">NEW</h3>
              {notifications.filter(n => n.isNew).map(notification => (
                <NotificationItem key={notification.id} {...notification} />
              ))}
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-400 mb-2">BEFORE THAT</h3>
              {notifications.filter(n => !n.isNew).map(notification => (
                <NotificationItem key={notification.id} {...notification} />
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default NotificationComponent;