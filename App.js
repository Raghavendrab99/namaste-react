
import React from "react";
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                    alt="Food logo" src="https://img.freepik.com/free-psd/isolated-hamburger-with-splash-ink-background_1409-3855.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704326400&semt=ais" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const resList = [
    {
        "info": {
            "id": "17306",
            "name": "KFC",
            "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
            "locality": "Kalyan Nagar",
            "areaName": "Kalyan Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4.2,
            "parentId": "547",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-06 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {

            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-kalyan-nagar-bangalore-17306",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "10577",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Kalyan Nagar",
            "areaName": "Kalyan Nagar",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4,
            "parentId": "721",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 45,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "45 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-07 01:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-kalyan-nagar-bangalore-10577",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "224979",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
            "locality": "Kalyan Nagar",
            "areaName": "HRBR Layout",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "5588",
            "avgRatingString": "4.7",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-07 00:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-kalyan-nagar-hrbr-layout-bangalore-224979",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "152787",
            "name": "Sweet Truth - Cake and Desserts",
            "cloudinaryImageId": "81cf6bfe2760a45a0caf2e28716ca4d7",
            "locality": "bagalur road",
            "areaName": "Kothanur",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "Snacks",
                "Bakery",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "4444",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 2.8,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "2.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-06 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹110"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-bagalur-road-kothanur-bangalore-152787",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "122186",
            "name": "CakeZone",
            "cloudinaryImageId": "e386a679bad57c2527925e5a22cd283a",
            "locality": "1ST STAGE",
            "areaName": "Hennur Bellary Road Layout",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Sweets",
                "Ice Cream"
            ],
            "avgRating": 4.4,
            "parentId": "7003",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-07 02:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/cakezone-1st-stage-hennur-bellary-road-layout-bangalore-122186",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "278305",
            "name": "Theobroma",
            "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
            "locality": "2nd Block - Hrbr Layout",
            "areaName": "Kalyan Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Bakery",
                "Desserts"
            ],
            "avgRating": 4.6,
            "parentId": "1040",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "34 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-06 23:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/theobroma-2nd-block-hrbr-layout-kalyan-nagar-bangalore-278305",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "5890",
            "name": "Polar Bear",
            "cloudinaryImageId": "57262fe3839f0bff174f3d7e7cc8a2b4",
            "locality": "HRBR Layout",
            "areaName": "Kalyan Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "726",
            "avgRatingString": "4.5",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-07 01:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/polar-bear-hrbr-layout-kalyan-nagar-bangalore-5890",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "269904",
            "name": "Dindigul Thalappakatti",
            "cloudinaryImageId": "bgzc8jdhof6p6p4lofpu",
            "locality": "Kalyan Nagar",
            "areaName": "Kalyan Nagar",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Biryani",
                "Barbecue",
                "South Indian",
                "Chinese",
                "North Indian"
            ],
            "avgRating": 4.1,
            "parentId": "332",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 4.4,
                "serviceability": "SERVICEABLE",
                "slaString": "36 mins",
                "lastMileTravelString": "4.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-06 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {

            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dindigul-thalappakatti-kalyan-nagar-bangalore-269904",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "41922",
            "name": "California Burrito",
            "cloudinaryImageId": "beggcu7941kviqihro2y",
            "locality": "Hennur Main Road",
            "areaName": "Kalyan Nagar",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Mexican",
                "American",
                "Salads",
                "Continental",
                "Keto",
                "Healthy Food"
            ],
            "avgRating": 4.5,
            "parentId": "1252",
            "avgRatingString": "4.5",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-07 03:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/california-burrito-hennur-main-road-kalyan-nagar-bangalore-41922",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "375976",
            "name": "Beijing Bites",
            "cloudinaryImageId": "w5pyk1u6eduznns3bzhr",
            "locality": "Geddalahalli",
            "areaName": "Hennur",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "Chinese",
                "Thai"
            ],
            "avgRating": 4.4,
            "parentId": "103",
            "avgRatingString": "4.4",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "36 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-07 01:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹999",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/beijing-bites-geddalahalli-hennur-bangalore-375976",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "271237",
            "name": "The Good Bowl",
            "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
            "locality": "bagalur road",
            "areaName": "Kothanur",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Pastas",
                "Punjabi",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "7918",
            "avgRatingString": "4.2",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 2.8,
                "serviceability": "SERVICEABLE",
                "slaString": "30 mins",
                "lastMileTravelString": "2.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-06 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-good-bowl-bagalur-road-kothanur-bangalore-271237",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "44910",
            "name": "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
            "cloudinaryImageId": "e7kspvcpoxknelgpu7qo",
            "locality": "2nd Block - Hrbr Layout",
            "areaName": "Kalyan Nagar",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Beverages",
                "Desserts",
                "Ice Cream",
                "Waffle",
                "Bakery",
                "Healthy Food"
            ],
            "avgRating": 4.1,
            "veg": true,
            "parentId": "5655",
            "avgRatingString": "4.1",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "31 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-07 02:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/frozen-bottle-milkshakes-desserts-and-ice-cream-2nd-block-hrbr-layout-kalyan-nagar-bangalore-44910",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "131813",
            "name": "Kanti Sweets",
            "cloudinaryImageId": "uwmq8a1hj1skaqyddz41",
            "locality": "Babusapalya",
            "areaName": "Babusuplaya",
            "costForTwo": "₹100 for two",
            "cuisines": [
                "Sweets"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "4700",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 2.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "2.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-06 22:45:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kanti-sweets-babusapalya-babusuplaya-bangalore-131813",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "11491",
            "name": "Subway",
            "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
            "locality": "Elements Mall",
            "areaName": "Nagawara",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Fast Food",
                "Salads",
                "Snacks",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4,
            "parentId": "2",
            "avgRatingString": "4.0",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 37,
                "lastMileTravel": 4.2,
                "serviceability": "SERVICEABLE",
                "slaString": "37 mins",
                "lastMileTravelString": "4.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-06 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {

            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/subway-elements-mall-nagawara-bangalore-11491",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "108788",
            "name": "Starbucks Coffee",
            "cloudinaryImageId": "258fe8a3577877fbfe064095ed1d9dc3",
            "locality": "2nd block",
            "areaName": "Kalyan Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Beverages",
                "Cafe",
                "Snacks",
                "Desserts",
                "Bakery",
                "Ice Cream"
            ],
            "avgRating": 4.3,
            "parentId": "195515",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 39,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "39 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-06 23:45:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/starbucks-coffee-2nd-block-kalyan-nagar-bangalore-108788",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "23693",
            "name": "McDonald's",
            "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
            "locality": "HRBR Layout",
            "areaName": "Kammanahalli/Kalyan Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "630",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 40,
                "lastMileTravel": 3.7,
                "serviceability": "SERVICEABLE",
                "slaString": "40 mins",
                "lastMileTravelString": "3.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-07 03:45:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "ABOVE ₹1000",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-hrbr-layout-kammanahalli-kalyan-nagar-bangalore-23693",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "1474",
            "name": "A2B - Adyar Ananda Bhavan",
            "cloudinaryImageId": "h8gvjtkgmptveipxjqzq",
            "locality": "Thanisandra Main Road",
            "areaName": "Nagawara",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "South Indian",
                "North Indian",
                "Sweets",
                "Chinese"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "22",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 4.4,
                "serviceability": "SERVICEABLE",
                "slaString": "35 mins",
                "lastMileTravelString": "4.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-06 22:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-thanisandra-main-road-nagawara-bangalore-1474",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "6922",
            "name": "FreshMenu",
            "cloudinaryImageId": "6c4de7b481d3614370e5062b2f33e7d6",
            "locality": "ASAPPA ROAD",
            "areaName": "Bommanahalli",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Continental",
                "Chinese",
                "Oriental",
                "Asian",
                "Healthy Food",
                "Fast Food",
                "Indian",
                "Desserts"
            ],
            "avgRating": 3.9,
            "parentId": "398",
            "avgRatingString": "3.9",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 4.3,
                "serviceability": "SERVICEABLE",
                "slaString": "36 mins",
                "lastMileTravelString": "4.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-07 00:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "EVERY ITEM",
                "subHeader": "@ ₹133"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/freshmenu-asappa-road-bommanahalli-bangalore-6922",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "152772",
            "name": "Faasos - Wraps, Rolls & Shawarma",
            "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
            "locality": "bagalur road",
            "areaName": "Kothanur",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Kebabs",
                "Fast Food",
                "Snacks",
                "American",
                "Healthy Food",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "21809",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 2.8,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "2.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-06 23:59:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹110"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-bagalur-road-kothanur-bangalore-152772",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "22042",
            "name": "Wow! Momo",
            "cloudinaryImageId": "0984acc0ed7b914206dbbcb90297becc",
            "locality": "CMR Road",
            "areaName": "Kalyan Nagar",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Tibetan",
                "Healthy Food",
                "Asian",
                "Chinese",
                "Snacks",
                "Continental",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "1776",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "38 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-01-06 22:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {

        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/wow-momo-cmr-road-kalyan-nagar-bangalore-22042",
            "type": "WEBLINK"
        }
    }
]



const RestaurentCard = (props) => {
    const { resData } = props;

    //optinal chaining read about this one
    const { cloudinaryImageId,
        name,
        cuisines,
        locality,
        areaName,
        avgRating
    } = resData?.info;



    return (
        <div className="resto-card">
            <div className="card">
                <img className="food" src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
                />
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{locality}</h4>
                <h4>{areaName}</h4>
                <h4>{avgRating}</h4>
            </div>

        </div >
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="resto-container">
                {/* <RestaurentCard resData={resList[0]} />
                <RestaurentCard resData={resList[1]} />
                <RestaurentCard resData={resList[2]} /> */}
                {
                    resList.map((restaurent) => (
                        <RestaurentCard key={restaurent.info.id} resData={restaurent} />
                    ))
                }



            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)