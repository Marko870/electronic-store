import { CarRental, Chat, Recycling, CardGiftcard } from "@mui/icons-material";
import smartImg from "../assets/smart home/electronic-store-category-image-01.jpg";
import gadgetsImg from "../assets/Gadgets/electronic-store-category-image-02.jpg";
import pcLaptopImg from "../assets/laptop/electronic-store-category-image-03.jpg";
import kitchenImg from "../assets/kitchen/electronic-store-category-image-05.jpg"

export const minuItems = [
    {  
        id: 1,
        title: "all products",
        link: "#",
        subMinu : [
            {
                title: "Smart home",
                img: smartImg
            },
            {
                title: "Gadgets",
                img: gadgetsImg
            },
            {
                title: "PCs & laptop",
                img: pcLaptopImg
            },
            {
                title: "Kitchen appliances",
                img: kitchenImg
            }
        ]
    },
    {
        id: 2,
        title: "tody's trends",
        link: "#todysTrends"
    },
    {  
        id: 3,
        title: "contact us",
        link: "#"
    },
    {  
        id: 4,
        title: "testimonials",
        link: "#"
    }
]
export const categoryies = [
    {
        title: "Smart home",
        img: smartImg,
        link: "#"
    },
    {
        title: "Gadgets",
        img: gadgetsImg,
        link: "#"
    },
    {
        title: "PCs & laptop",
        img: pcLaptopImg,
        link: "#"
    },
    {
        title: "Kitchen appliances",
        img: kitchenImg,
        link: "#"
    }
]
export const features = [
    { title: "Free shipping", icon: CarRental, subtitle: "When you spend $80 or more" },
    { title: "We are available 24/7", icon: Chat , subtitle: "Need help? contact us anytime" },
    { title: "Satisfied or return", icon: Recycling , subtitle: "Easy 30-day return policy" },
    { title: "100% secure payments", icon: CardGiftcard, subtitle: "Visa, Mastercard, Stripe, PayPal" }
]
export const footerLinks = [
    {heading: "shop",links: ["hot deals","categories","brands","rebates","weekly deals"]},
    {heading: "need help?",links: ["hot deals","categories","brands","rebates","weekly deals"]},
    {heading: "contact",links: ["123 Fifth Avenue, New York, NY 10160","contact@info.com","929-242-6868"]}
]
