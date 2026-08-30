import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  ShieldCheck,
  LockKeyhole,
  Phone,
  MessageSquare,
  Mic,
  HeartHandshake,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  FileText,
  Scale,
  Headphones,
  UserRound,
  Languages,
  Send,
  Home,
  ClipboardList,
  Activity,
  LifeBuoy,
  Globe2,
  X,
  ArrowLeft,
  Search,
  Check,
  Sparkles,
  History,
  Eye,
  Clock,
  Calendar,
} from "lucide-react";

import "./style.css";

/* =========================================================
   LANGUAGE DATA
========================================================= */

const languages = {
  en: {
    name: "English",
    native: "English",

    brand: "SWARTHIKA",
    subtitle: "PUBLIC SERVICE PROTOTYPE",

    description:
      "SWARTHIKA helps structure complaints and identify support needs using an explainable screening aid. You stay in control at every step.",

    startComplaint: "Start a complaint",
    chooseLanguage: "Choose language",

    trackComplaint: "Complaint History",
    support: "Support",
    emergencySOS: "Emergency SOS",

    chatText: "Chat / Text",
    chatDescription: "Share your complaint in writing",

    emergencyDescription: "Simulate priority escalation",

    privacy:
      "Your prototype journey uses local mock data. No real emergency service or medical diagnosis is connected.",

    languagesCount: "10+",
    languagesLabel: "Languages",

    scale: "0–100",
    scaleLabel: "SVA scale",

    available: "24/7",
    availableLabel: "Prototype flow",

    human: "Human",
    humanLabel: "Final decision",

    victimFirst: "Victim-first",
    victimDescription:
      "Short, calm steps with clear choices and accessible controls.",

    explainable: "Explainable screening",
    explainableDescription:
      "Stress and trauma signals are shown as a triage aid, never as a diagnosis.",

    humanControl: "Human control",
    humanDescription:
      "Authorized personnel verify recommendations before escalation or action.",

    privacyFirst: "Privacy-first • Mock/demo data only",

    aiSuggests: "AI suggests",
    humanVerifies: "Human verifies",
    authorityDecides: "Authorized personnel decide",

    authorityDemo: "Authority demo",

    complaintTitle: "Tell us what happened",
    complaintSubtitle:
      "You can describe your situation in your own words. You remain in control.",

    complaintPlaceholder:
      "Type your complaint or describe what happened...",

    continue: "Continue",
    back: "Back",

    supportTitle: "Support options",

    counselling: "Counselling support",
    counsellingDescription:
      "Connect with trained support personnel for emotional assistance.",

    legalAid: "Legal aid",
    legalAidDescription:
      "Get information about available legal support and next steps.",

    helpline: "Helpline",
    helplineDescription:
      "Speak with an authorized support representative.",

    screeningTitle: "Explainable screening",
    screeningDescription:
      "This prototype uses your responses to create a support-priority indicator. It is not a diagnosis.",

    priority: "Support priority",
    low: "Low",
    medium: "Medium",
    high: "High",

    submit: "Submit complaint",

    submittedTitle: "Complaint submitted",
    submittedDescription:
      "Your complaint has been recorded in the prototype system.",

    complaintId: "Complaint ID",
    trackNow: "View in Complaint History",

    sosTitle: "Emergency SOS",
    sosDescription:
      "This prototype simulates emergency escalation. No real emergency service is contacted.",

    confirmSOS: "Confirm SOS",
    cancel: "Cancel",

    trackingTitle: "Complaint History",
    trackingDescription:
      "Real-time records of all submitted complaints, verification status, and resolution progress.",

    idPlaceholder: "Search or enter complaint ID",
    checkStatus: "Check status",

    statusReceived: "Complaint received",
    statusScreening: "Initial screening completed",
    statusHuman: "Awaiting human verification",
    statusAuthority: "Authority escalation",

    home: "Home",
    complaint: "Complaint",
    supportNav: "Support",
  },

  hi: {
    name: "Hindi",
    native: "हिन्दी",

    brand: "स्वार्थिका",
    subtitle: "सार्वजनिक सेवा प्रोटोटाइप",

    description:
      "स्वार्थिका समझाने योग्य स्क्रीनिंग सहायता के माध्यम से शिकायतों को व्यवस्थित करने और सहायता की जरूरत पहचानने में मदद करता है। हर चरण पर नियंत्रण आपके हाथ में रहता है।",

    startComplaint: "शिकायत शुरू करें",
    chooseLanguage: "भाषा चुनें",

    trackComplaint: "शिकायत इतिहास",
    support: "सहायता",
    emergencySOS: "आपातकालीन SOS",

    chatText: "चैट / टेक्स्ट",
    chatDescription: "अपनी शिकायत लिखकर साझा करें",

    emergencyDescription: "प्राथमिकता बढ़ाने का डेमो",

    privacy:
      "आपका प्रोटोटाइप अनुभव स्थानीय डेमो डेटा का उपयोग करता है। कोई वास्तविक आपातकालीन सेवा या चिकित्सा निदान जुड़ा नहीं है।",

    languagesCount: "10+",
    languagesLabel: "भाषाएँ",

    scale: "0–100",
    scaleLabel: "SVA स्केल",

    available: "24/7",
    availableLabel: "प्रोटोटाइप प्रक्रिया",

    human: "मानव",
    humanLabel: "अंतिम निर्णय",

    victimFirst: "पीड़ित-प्रथम",
    victimDescription:
      "स्पष्ट विकल्पों और आसान नियंत्रण के साथ छोटे और शांत चरण।",

    explainable: "समझाने योग्य स्क्रीनिंग",
    explainableDescription:
      "तनाव और आघात संकेतों को केवल सहायता के लिए दिखाया जाता है, निदान के लिए नहीं।",

    humanControl: "मानव नियंत्रण",
    humanDescription:
      "अधिकृत कर्मचारी कार्रवाई से पहले सुझावों की पुष्टि करते हैं।",

    privacyFirst: "गोपनीयता-प्रथम • केवल डेमो डेटा",

    aiSuggests: "AI सुझाव देता है",
    humanVerifies: "मानव पुष्टि करता है",
    authorityDecides: "अधिकृत कर्मचारी निर्णय लेते हैं",

    authorityDemo: "अधिकारी डेमो",

    complaintTitle: "हमें बताएं क्या हुआ",
    complaintSubtitle:
      "आप अपनी स्थिति अपने शब्दों में बता सकते हैं। नियंत्रण आपके हाथ में है।",

    complaintPlaceholder:
      "अपनी शिकायत लिखें या बताएं कि क्या हुआ...",

    continue: "जारी रखें",
    back: "वापस",

    supportTitle: "सहायता विकल्प",

    counselling: "काउंसलिंग सहायता",
    counsellingDescription:
      "भावनात्मक सहायता के लिए प्रशिक्षित सहायता कर्मियों से जुड़ें।",

    legalAid: "कानूनी सहायता",
    legalAidDescription:
      "उपलब्ध कानूनी सहायता और अगले कदमों की जानकारी प्राप्त करें।",

    helpline: "हेल्पलाइन",
    helplineDescription:
      "अधिकृत सहायता प्रतिनिधि से बात करें।",

    screeningTitle: "समझाने योग्य स्क्रीनिंग",
    screeningDescription:
      "यह प्रोटोटाइप आपकी प्रतिक्रियाओं से सहायता प्राथमिकता संकेत बनाता है। यह निदान नहीं है।",

    priority: "सहायता प्राथमिकता",
    low: "कम",
    medium: "मध्यम",
    high: "उच्च",

    submit: "शिकायत जमा करें",

    submittedTitle: "शिकायत जमा हो गई",
    submittedDescription:
      "आपकी शिकायत प्रोटोटाइप सिस्टम में दर्ज कर ली गई है।",

    complaintId: "शिकायत ID",
    trackNow: "इतिहास में देखें",

    sosTitle: "आपातकालीन SOS",
    sosDescription:
      "यह प्रोटोटाइप आपातकालीन एस्केलेशन का डेमो करता है। कोई वास्तविक सेवा संपर्क नहीं की जाती।",

    confirmSOS: "SOS की पुष्टि करें",
    cancel: "रद्द करें",

    trackingTitle: "शिकायत इतिहास",
    trackingDescription:
      "दर्ज की गई शिकायतों, सत्यापन स्थिति और समाधान प्रगति का वास्तविक समय रिकॉर्ड देखें।",

    idPlaceholder: "शिकायत ID दर्ज करें",
    checkStatus: "स्थिति देखें",

    statusReceived: "शिकायत प्राप्त हुई",
    statusScreening: "प्रारंभिक स्क्रीनिंग पूरी हुई",
    statusHuman: "मानव पुष्टि की प्रतीक्षा",
    statusAuthority: "प्राधिकरण एस्केलेशन",

    home: "होम",
    complaint: "शिकायत",
    supportNav: "सहायता",
  },

  mr: {
    name: "Marathi",
    native: "मराठी",

    brand: "स्वार्थिका",
    subtitle: "सार्वजनिक सेवा प्रोटोटाइप",

    description:
      "स्वार्थिका तक्रारी व्यवस्थित करण्यासाठी आणि सहाय्याची गरज ओळखण्यासाठी समजण्यास सोप्या स्क्रीनिंग प्रणालीचा वापर करते. प्रत्येक टप्प्यावर नियंत्रण तुमच्या हातात आहे.",

    startComplaint: "तक्रार सुरू करा",
    chooseLanguage: "भाषा निवडा",

    trackComplaint: "तक्रार इतिहास",
    support: "मदत",
    emergencySOS: "आपत्कालीन SOS",

    chatText: "चॅट / टेक्स्ट",
    chatDescription: "तुमची तक्रार लिखित स्वरूपात शेअर करा",

    emergencyDescription: "प्राधान्य एस्केलेशनचे डेमो",

    privacy:
      "तुमचा प्रोटोटाइप अनुभव स्थानिक डेमो डेटाचा वापर करतो. कोणतीही वास्तविक आपत्कालीन सेवा किंवा वैद्यकीय निदान जोडलेले नाही.",

    languagesCount: "10+",
    languagesLabel: "भाषा",

    scale: "0–100",
    scaleLabel: "SVA स्केल",

    available: "24/7",
    availableLabel: "प्रोटोटाइप प्रक्रिया",

    human: "मानवी",
    humanLabel: "अंतिम निर्णय",

    victimFirst: "पीडित-प्रथम",
    victimDescription:
      "स्पष्ट पर्याय आणि सुलभ नियंत्रणांसह छोटे आणि शांत टप्पे.",

    explainable: "समजण्यास सोपे स्क्रीनिंग",
    explainableDescription:
      "ताण आणि आघाताचे संकेत केवळ सहाय्याच्या उद्देशाने दाखवले जातात.",

    humanControl: "मानवी नियंत्रण",
    humanDescription:
      "अधिकृत कर्मचारी कारवाईपूर्वी शिफारसींची पडताळणी करतात.",

    privacyFirst: "गोपनीयता-प्रथम • फक्त डेमो डेटा",

    aiSuggests: "AI सुचवते",
    humanVerifies: "मानव पडताळतो",
    authorityDecides: "अधिकृत कर्मचारी निर्णय घेतात",

    authorityDemo: "अधिकारी डेमो",

    complaintTitle: "काय घडले ते सांगा",
    complaintSubtitle:
      "तुमची परिस्थिती तुमच्या स्वतःच्या शब्दांत सांगा. नियंत्रण तुमच्या हातात आहे.",

    complaintPlaceholder:
      "तुमची तक्रार लिहा किंवा काय घडले ते सांगा...",

    continue: "पुढे जा",
    back: "मागे",

    supportTitle: "मदतीचे पर्याय",

    counselling: "समुपदेशन मदत",
    counsellingDescription:
      "भावनिक मदतीसाठी प्रशिक्षित सहाय्य कर्मचाऱ्यांशी संपर्क साधा.",

    legalAid: "कायदेशीर मदत",
    legalAidDescription:
      "उपलब्ध कायदेशीर मदत आणि पुढील टप्प्यांची माहिती मिळवा.",

    helpline: "हेल्पलाइन",
    helplineDescription:
      "अधिकृत सहाय्य प्रतिनिधीशी बोला.",

    screeningTitle: "समजण्यास सोपे स्क्रीनिंग",
    screeningDescription:
      "हा प्रोटोटाइप तुमच्या उत्तरांवर आधारित सहाय्य-प्राधान्य तयार करतो. हे निदान नाही.",

    priority: "सहाय्य प्राधान्य",
    low: "कमी",
    medium: "मध्यम",
    high: "उच्च",

    submit: "तक्रार सबमिट करा",

    submittedTitle: "तक्रार सबमिट झाली",
    submittedDescription:
      "तुमची तक्रार प्रोटोटाइप प्रणालीमध्ये नोंदवली गेली आहे.",

    complaintId: "तक्रार ID",
    trackNow: "तक्रार ट्रॅक करा",

    sosTitle: "आपत्कालीन SOS",
    sosDescription:
      "हा प्रोटोटाइप आपत्कालीन एस्केलेशनचे अनुकरण करतो. कोणत्याही वास्तविक सेवेशी संपर्क होत नाही.",

    confirmSOS: "SOS निश्चित करा",
    cancel: "रद्द करा",

    trackingTitle: "तक्रार ट्रॅक करा",
    trackingDescription:
      "वर्तमान प्रोटोटाइप स्थिती पाहण्यासाठी तक्रार ID प्रविष्ट करा.",

    idPlaceholder: "तक्रार ID प्रविष्ट करा",
    checkStatus: "स्थिती तपासा",

    statusReceived: "तक्रार प्राप्त झाली",
    statusScreening: "प्राथमिक स्क्रीनिंग पूर्ण",
    statusHuman: "मानवी पडताळणीची प्रतीक्षा",
    statusAuthority: "प्राधिकरण एस्केलेशन",

    home: "मुख्यपृष्ठ",
    complaint: "तक्रार",
    supportNav: "मदत",
  },

  bn: {
    name: "Bengali",
    native: "বাংলা",
    brand: "স্বার্থিকা",
    subtitle: "জনসেবা প্রোটোটাইপ",
    description:
      "স্বার্থিকা অভিযোগ গঠন করতে এবং সহায়তার প্রয়োজন শনাক্ত করতে সহায়তা করে। প্রতিটি ধাপে নিয়ন্ত্রণ আপনার হাতে থাকে।",
    startComplaint: "অভিযোগ শুরু করুন",
    chooseLanguage: "ভাষা নির্বাচন করুন",
    trackComplaint: "অভিযোগ ট্র্যাক করুন",
    support: "সহায়তা",
    emergencySOS: "জরুরি SOS",
    chatText: "চ্যাট / টেক্সট",
    chatDescription: "লিখে আপনার অভিযোগ শেয়ার করুন",
    emergencyDescription: "অগ্রাধিকার বৃদ্ধি ডেমো",
    privacy: "এই প্রোটোটাইপ স্থানীয় ডেমো ডেটা ব্যবহার করে। কোনো বাস্তব জরুরি পরিষেবা সংযুক্ত নয়।",
    languagesCount: "10+",
    languagesLabel: "ভাষা",
    scale: "0–100",
    scaleLabel: "SVA স্কেল",
    available: "24/7",
    availableLabel: "প্রোটোটাইপ প্রবাহ",
    human: "মানব",
    humanLabel: "চূড়ান্ত সিদ্ধান্ত",
    victimFirst: "ভুক্তভোগী-প্রথম",
    victimDescription: "স্পষ্ট পছন্দ এবং সহজ নিয়ন্ত্রণসহ শান্ত ধাপ।",
    explainable: "ব্যাখ্যাযোগ্য স্ক্রিনিং",
    explainableDescription: "চাপ ও ট্রমার সংকেত সহায়তার জন্য দেখানো হয়, রোগ নির্ণয়ের জন্য নয়।",
    humanControl: "মানব নিয়ন্ত্রণ",
    humanDescription: "অনুমোদিত কর্মীরা পদক্ষেপের আগে সুপারিশ যাচাই করেন।",
    privacyFirst: "গোপনীয়তা-প্রথম • শুধুমাত্র ডেমো ডেটা",
    aiSuggests: "AI পরামর্শ দেয়",
    humanVerifies: "মানব যাচাই করে",
    authorityDecides: "অনুমোদিত কর্মীরা সিদ্ধান্ত নেন",
    authorityDemo: "কর্তৃপক্ষ ডেমো",
    complaintTitle: "কি ঘটেছে বলুন",
    complaintSubtitle: "আপনার নিজের ভাষায় পরিস্থিতি বর্ণনা করুন। নিয়ন্ত্রণ আপনার হাতে।",
    complaintPlaceholder: "আপনার অভিযোগ লিখুন...",
    continue: "চালিয়ে যান",
    back: "ফিরে যান",
    supportTitle: "সহায়তার বিকল্প",
    counselling: "কাউন্সেলিং সহায়তা",
    counsellingDescription: "প্রশিক্ষিত সহায়তা কর্মীদের সাথে যোগাযোগ করুন।",
    legalAid: "আইনি সহায়তা",
    legalAidDescription: "উপলব্ধ আইনি সহায়তা সম্পর্কে তথ্য পান।",
    helpline: "হেল্পলাইন",
    helplineDescription: "অনুমোদিত সহায়তা প্রতিনিধির সাথে কথা বলুন।",
    screeningTitle: "ব্যাখ্যাযোগ্য স্ক্রিনিং",
    screeningDescription: "আপনার উত্তরের ভিত্তিতে সহায়তার অগ্রাধিকার তৈরি করা হয়। এটি রোগ নির্ণয় নয়।",
    priority: "সহায়তার অগ্রাধিকার",
    low: "কম",
    medium: "মাঝারি",
    high: "উচ্চ",
    submit: "অভিযোগ জমা দিন",
    submittedTitle: "অভিযোগ জমা হয়েছে",
    submittedDescription: "আপনার অভিযোগ প্রোটোটাইপ সিস্টেমে নথিভুক্ত হয়েছে।",
    complaintId: "অভিযোগ ID",
    trackNow: "অভিযোগ ট্র্যাক করুন",
    sosTitle: "জরুরি SOS",
    sosDescription: "এটি জরুরি অগ্রাধিকার বৃদ্ধির একটি ডেমো। কোনো বাস্তব পরিষেবায় যোগাযোগ করা হয় না।",
    confirmSOS: "SOS নিশ্চিত করুন",
    cancel: "বাতিল",
    trackingTitle: "অভিযোগ ট্র্যাক করুন",
    trackingDescription: "বর্তমান অবস্থা দেখতে অভিযোগ ID লিখুন।",
    idPlaceholder: "অভিযোগ ID লিখুন",
    checkStatus: "স্ট্যাটাস দেখুন",
    statusReceived: "অভিযোগ গৃহীত",
    statusScreening: "প্রাথমিক স্ক্রিনিং সম্পন্ন",
    statusHuman: "মানব যাচাইয়ের অপেক্ষায়",
    statusAuthority: "কর্তৃপক্ষের কাছে এসকেলেশন",
    home: "হোম",
    complaint: "অভিযোগ",
    supportNav: "সহায়তা",
  },

  gu: {
    name: "Gujarati",
    native: "ગુજરાતી",
    brand: "સ્વાર્થિકા",
    subtitle: "જાહેર સેવા પ્રોટોટાઇપ",
    description: "સ્વાર્થિકા ફરિયાદોને ગોઠવવામાં અને સહાયની જરૂરિયાત ઓળખવામાં મદદ કરે છે.",
    startComplaint: "ફરિયાદ શરૂ કરો",
    chooseLanguage: "ભાષા પસંદ કરો",
    trackComplaint: "ફરિયાદ ટ્રેક કરો",
    support: "સહાય",
    emergencySOS: "ઇમરજન્સી SOS",
    chatText: "ચેટ / ટેક્સ્ટ",
    chatDescription: "તમારી ફરિયાદ લખીને શેર કરો",
    emergencyDescription: "પ્રાથમિકતા વધારવાનું ડેમો",
    privacy: "આ પ્રોટોટાઇપ સ્થાનિક ડેમો ડેટાનો ઉપયોગ કરે છે. કોઈ વાસ્તવિક ઇમરજન્સી સેવા જોડાયેલી નથી.",
    languagesCount: "10+",
    languagesLabel: "ભાષાઓ",
    scale: "0–100",
    scaleLabel: "SVA સ્કેલ",
    available: "24/7",
    availableLabel: "પ્રોટોટાઇપ પ્રવાહ",
    human: "માનવ",
    humanLabel: "અંતિમ નિર્ણય",
    victimFirst: "પીડિત-પ્રથમ",
    victimDescription: "સ્પષ્ટ વિકલ્પો અને સરળ નિયંત્રણો સાથેના ટૂંકા પગલાં.",
    explainable: "સમજાવી શકાય તેવી સ્ક્રીનિંગ",
    explainableDescription: "તણાવ અને આઘાતના સંકેતો સહાય માટે દર્શાવવામાં આવે છે.",
    humanControl: "માનવ નિયંત્રણ",
    humanDescription: "અધિકૃત કર્મચારીઓ કાર્યવાહી પહેલાં ભલામણો ચકાસે છે.",
    privacyFirst: "ગોપનીયતા-પ્રથમ • ફક્ત ડેમો ડેટા",
    aiSuggests: "AI સૂચવે છે",
    humanVerifies: "માનવ ચકાસે છે",
    authorityDecides: "અધિકૃત કર્મચારી નિર્ણય લે છે",
    authorityDemo: "અધિકારી ડેમો",
    complaintTitle: "શું થયું તે જણાવો",
    complaintSubtitle: "તમારી પરિસ્થિતિ તમારા શબ્દોમાં જણાવો.",
    complaintPlaceholder: "તમારી ફરિયાદ લખો...",
    continue: "આગળ વધો",
    back: "પાછા",
    supportTitle: "સહાયના વિકલ્પો",
    counselling: "કાઉન્સેલિંગ સહાય",
    counsellingDescription: "પ્રશિક્ષિત સહાય કર્મચારીઓ સાથે જોડાઓ.",
    legalAid: "કાનૂની સહાય",
    legalAidDescription: "ઉપલબ્ધ કાનૂની સહાય વિશે માહિતી મેળવો.",
    helpline: "હેલ્પલાઇન",
    helplineDescription: "અધિકૃત સહાય પ્રતિનિધિ સાથે વાત કરો.",
    screeningTitle: "સમજાવી શકાય તેવી સ્ક્રીનિંગ",
    screeningDescription: "તમારા જવાબોના આધારે સહાયની પ્રાથમિકતા બનાવવામાં આવે છે. આ નિદાન નથી.",
    priority: "સહાય પ્રાથમિકતા",
    low: "ઓછી",
    medium: "મધ્યમ",
    high: "ઉચ્ચ",
    submit: "ફરિયાદ સબમિટ કરો",
    submittedTitle: "ફરિયાદ સબમિટ થઈ",
    submittedDescription: "તમારી ફરિયાદ પ્રોટોટાઇપ સિસ્ટમમાં નોંધાઈ છે.",
    complaintId: "ફરિયાદ ID",
    trackNow: "ફરિયાદ ટ્રેક કરો",
    sosTitle: "ઇમરજન્સી SOS",
    sosDescription: "આ પ્રોટોટાઇપ ઇમરજન્સી એસ્કેલેશનનું ડેમો કરે છે.",
    confirmSOS: "SOS કન્ફર્મ કરો",
    cancel: "રદ કરો",
    trackingTitle: "ફરિયાદ ટ્રેક કરો",
    trackingDescription: "વર્તમાન સ્થિતિ જોવા માટે ફરિયાદ ID દાખલ કરો.",
    idPlaceholder: "ફરિયાદ ID દાખલ કરો",
    checkStatus: "સ્થિતિ તપાસો",
    statusReceived: "ફરિયાદ પ્રાપ્ત થઈ",
    statusScreening: "પ્રારંભિક સ્ક્રીનિંગ પૂર્ણ",
    statusHuman: "માનવ ચકાસણીની રાહ",
    statusAuthority: "અધિકારી એસ્કેલેશન",
    home: "હોમ",
    complaint: "ફરિયાદ",
    supportNav: "સહાય",
  },

  ta: {
    name: "Tamil",
    native: "தமிழ்",
    brand: "ஸ்வார்த்திகா",
    subtitle: "பொது சேவை முன்மாதிரி",
    description: "புகார்களை ஒழுங்குபடுத்தவும் ஆதரவு தேவைகளை கண்டறியவும் ஸ்வார்த்திகா உதவுகிறது.",
    startComplaint: "புகாரைத் தொடங்குங்கள்",
    chooseLanguage: "மொழியைத் தேர்ந்தெடுக்கவும்",
    trackComplaint: "புகாரைக் கண்காணிக்கவும்",
    support: "ஆதரவு",
    emergencySOS: "அவசர SOS",
    chatText: "அரட்டை / உரை",
    chatDescription: "உங்கள் புகாரை எழுத்தில் பகிரவும்",
    emergencyDescription: "முன்னுரிமை உயர்வு டெமோ",
    privacy: "இந்த முன்மாதிரி உள்ளூர் டெமோ தரவைப் பயன்படுத்துகிறது. உண்மையான அவசர சேவை இணைக்கப்படவில்லை.",
    languagesCount: "10+",
    languagesLabel: "மொழிகள்",
    scale: "0–100",
    scaleLabel: "SVA அளவு",
    available: "24/7",
    availableLabel: "முன்மாதிரி ஓட்டம்",
    human: "மனித",
    humanLabel: "இறுதி முடிவு",
    victimFirst: "பாதிக்கப்பட்டவர் முதலில்",
    victimDescription: "தெளிவான தேர்வுகளுடன் குறுகிய மற்றும் அமைதியான படிகள்.",
    explainable: "விளக்கக்கூடிய ஸ்கிரீனிங்",
    explainableDescription: "மன அழுத்தம் மற்றும் அதிர்ச்சி அறிகுறிகள் ஆதரவுக்காக மட்டுமே காட்டப்படுகின்றன.",
    humanControl: "மனித கட்டுப்பாடு",
    humanDescription: "அங்கீகரிக்கப்பட்ட பணியாளர்கள் நடவடிக்கைக்கு முன் பரிந்துரைகளை சரிபார்க்கின்றனர்.",
    privacyFirst: "தனியுரிமை முதலில் • டெமோ தரவு மட்டும்",
    aiSuggests: "AI பரிந்துரைக்கிறது",
    humanVerifies: "மனிதர் சரிபார்க்கிறார்",
    authorityDecides: "அங்கீகரிக்கப்பட்ட பணியாளர் முடிவு செய்கிறார்",
    authorityDemo: "அதிகாரி டெமோ",
    complaintTitle: "என்ன நடந்தது என்று சொல்லுங்கள்",
    complaintSubtitle: "உங்கள் நிலைமையை உங்கள் சொந்த வார்த்தைகளில் கூறலாம்.",
    complaintPlaceholder: "உங்கள் புகாரை எழுதுங்கள்...",
    continue: "தொடரவும்",
    back: "பின்செல்",
    supportTitle: "ஆதரவு விருப்பங்கள்",
    counselling: "ஆலோசனை ஆதரவு",
    counsellingDescription: "பயிற்சி பெற்ற ஆதரவு பணியாளர்களுடன் இணைக்கவும்.",
    legalAid: "சட்ட உதவி",
    legalAidDescription: "கிடைக்கக்கூடிய சட்ட உதவி பற்றிய தகவலைப் பெறுங்கள்.",
    helpline: "ஹெல்ப்லைன்",
    helplineDescription: "அங்கீகரிக்கப்பட்ட ஆதரவு பிரதிநிதியுடன் பேசுங்கள்.",
    screeningTitle: "விளக்கக்கூடிய ஸ்கிரீனிங்",
    screeningDescription: "உங்கள் பதில்களின் அடிப்படையில் ஆதரவு முன்னுரிமை உருவாக்கப்படுகிறது. இது நோயறிதல் அல்ல.",
    priority: "ஆதரவு முன்னுரிமை",
    low: "குறைவு",
    medium: "நடுத்தரம்",
    high: "அதிகம்",
    submit: "புகாரை சமர்ப்பிக்கவும்",
    submittedTitle: "புகார் சமர்ப்பிக்கப்பட்டது",
    submittedDescription: "உங்கள் புகார் முன்மாதிரி அமைப்பில் பதிவு செய்யப்பட்டுள்ளது.",
    complaintId: "புகார் ID",
    trackNow: "புகாரைக் கண்காணிக்கவும்",
    sosTitle: "அவசர SOS",
    sosDescription: "இந்த முன்மாதிரி அவசர முன்னுரிமை உயர்வை உருவகப்படுத்துகிறது.",
    confirmSOS: "SOS உறுதிப்படுத்தவும்",
    cancel: "ரத்து",
    trackingTitle: "புகாரைக் கண்காணிக்கவும்",
    trackingDescription: "தற்போதைய நிலையைப் பார்க்க புகார் ID உள்ளிடவும்.",
    idPlaceholder: "புகார் ID உள்ளிடவும்",
    checkStatus: "நிலையைச் சரிபார்க்கவும்",
    statusReceived: "புகார் பெறப்பட்டது",
    statusScreening: "ஆரம்ப ஸ்கிரீனிங் முடிந்தது",
    statusHuman: "மனித சரிபார்ப்புக்காக காத்திருக்கிறது",
    statusAuthority: "அதிகாரி எஸ்கலேஷன்",
    home: "முகப்பு",
    complaint: "புகார்",
    supportNav: "ஆதரவு",
  },

  te: {
    name: "Telugu",
    native: "తెలుగు",
    brand: "స్వార్థిక",
    subtitle: "ప్రజా సేవ ప్రోటోటైప్",
    description: "ఫిర్యాదులను క్రమబద్ధీకరించడంలో మరియు సహాయం అవసరాలను గుర్తించడంలో స్వార్థిక సహాయపడుతుంది.",
    startComplaint: "ఫిర్యాదును ప్రారంభించండి",
    chooseLanguage: "భాషను ఎంచుకోండి",
    trackComplaint: "ఫిర్యాదును ట్రాక్ చేయండి",
    support: "సహాయం",
    emergencySOS: "అత్యవసర SOS",
    chatText: "చాట్ / టెక్స్ట్",
    chatDescription: "మీ ఫిర్యాదును రాతపూర్వకంగా పంచుకోండి",
    emergencyDescription: "ప్రాధాన్యత ఎస్కలేషన్ డెమో",
    privacy: "ఈ ప్రోటోటైప్ స్థానిక డెమో డేటాను ఉపయోగిస్తుంది. నిజమైన అత్యవసర సేవ కనెక్ట్ కాలేదు.",
    languagesCount: "10+",
    languagesLabel: "భాషలు",
    scale: "0–100",
    scaleLabel: "SVA స్కేల్",
    available: "24/7",
    availableLabel: "ప్రోటోటైప్ ఫ్లో",
    human: "మానవ",
    humanLabel: "తుది నిర్ణయం",
    victimFirst: "బాధితుడు మొదట",
    victimDescription: "స్పష్టమైన ఎంపికలు మరియు సులభమైన నియంత్రణలతో చిన్న దశలు.",
    explainable: "వివరణాత్మక స్క్రీనింగ్",
    explainableDescription: "ఒత్తిడి మరియు ట్రామా సంకేతాలు సహాయం కోసం మాత్రమే చూపబడతాయి.",
    humanControl: "మానవ నియంత్రణ",
    humanDescription: "అధికారిక సిబ్బంది చర్యకు ముందు సూచనలను ధృవీకరిస్తారు.",
    privacyFirst: "గోప్యత మొదట • డెమో డేటా మాత్రమే",
    aiSuggests: "AI సూచిస్తుంది",
    humanVerifies: "మానవుడు ధృవీకరిస్తాడు",
    authorityDecides: "అధికారిక సిబ్బంది నిర్ణయిస్తారు",
    authorityDemo: "అధికారి డెమో",
    complaintTitle: "ఏం జరిగిందో చెప్పండి",
    complaintSubtitle: "మీ పరిస్థితిని మీ స్వంత మాటల్లో వివరించండి.",
    complaintPlaceholder: "మీ ఫిర్యాదును టైప్ చేయండి...",
    continue: "కొనసాగించండి",
    back: "వెనుకకు",
    supportTitle: "సహాయ ఎంపికలు",
    counselling: "కౌన్సెలింగ్ సహాయం",
    counsellingDescription: "శిక్షణ పొందిన సహాయక సిబ్బందితో కనెక్ట్ అవ్వండి.",
    legalAid: "చట్టపరమైన సహాయం",
    legalAidDescription: "అందుబాటులో ఉన్న చట్టపరమైన సహాయం గురించి తెలుసుకోండి.",
    helpline: "హెల్ప్‌లైన్",
    helplineDescription: "అధికారిక సహాయ ప్రతినిధితో మాట్లాడండి.",
    screeningTitle: "వివరణాత్మక స్క్రీనింగ్",
    screeningDescription: "మీ సమాధానాల ఆధారంగా సహాయ ప్రాధాన్యత రూపొందించబడుతుంది. ఇది నిర్ధారణ కాదు.",
    priority: "సహాయ ప్రాధాన్యత",
    low: "తక్కువ",
    medium: "మధ్యస్థ",
    high: "అధిక",
    submit: "ఫిర్యాదును సమర్పించండి",
    submittedTitle: "ఫిర్యాదు సమర్పించబడింది",
    submittedDescription: "మీ ఫిర్యాదు ప్రోటోటైప్ సిస్టమ్‌లో నమోదు చేయబడింది.",
    complaintId: "ఫిర్యాదు ID",
    trackNow: "ఫిర్యాదును ట్రాక్ చేయండి",
    sosTitle: "అత్యవసర SOS",
    sosDescription: "ఈ ప్రోటోటైప్ అత్యవసర ఎస్కలేషన్‌ను అనుకరిస్తుంది.",
    confirmSOS: "SOS నిర్ధారించండి",
    cancel: "రద్దు",
    trackingTitle: "ఫిర్యాదును ట్రాక్ చేయండి",
    trackingDescription: "ప్రస్తుత స్థితిని చూడటానికి ఫిర్యాదు ID నమోదు చేయండి.",
    idPlaceholder: "ఫిర్యాదు ID నమోదు చేయండి",
    checkStatus: "స్థితిని తనిఖీ చేయండి",
    statusReceived: "ఫిర్యాదు అందింది",
    statusScreening: "ప్రాథమిక స్క్రీనింగ్ పూర్తయింది",
    statusHuman: "మానవ ధృవీకరణ కోసం వేచి ఉంది",
    statusAuthority: "అధికారిక ఎస్కలేషన్",
    home: "హోమ్",
    complaint: "ఫిర్యాదు",
    supportNav: "సహాయం",
  },

  kn: {
    name: "Kannada",
    native: "ಕನ್ನಡ",
    brand: "ಸ್ವಾರ್ಥಿಕಾ",
    subtitle: "ಸಾರ್ವಜನಿಕ ಸೇವಾ ಪ್ರೋಟೋಟೈಪ್",
    description: "ದೂರುಗಳನ್ನು ವ್ಯವಸ್ಥಿತಗೊಳಿಸಲು ಮತ್ತು ಸಹಾಯದ ಅಗತ್ಯಗಳನ್ನು ಗುರುತಿಸಲು ಸ್ವಾರ್ಥಿಕಾ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    startComplaint: "ದೂರು ಪ್ರಾರಂಭಿಸಿ",
    chooseLanguage: "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ",
    trackComplaint: "ದೂರು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
    support: "ಸಹಾಯ",
    emergencySOS: "ತುರ್ತು SOS",
    chatText: "ಚಾಟ್ / ಪಠ್ಯ",
    chatDescription: "ನಿಮ್ಮ ದೂರನ್ನು ಬರಹದಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ",
    emergencyDescription: "ಆದ್ಯತೆ ಹೆಚ್ಚಿಸುವ ಡೆಮೋ",
    privacy: "ಈ ಪ್ರೋಟೋಟೈಪ್ ಸ್ಥಳೀಯ ಡೆಮೋ ಡೇಟಾವನ್ನು ಬಳಸುತ್ತದೆ. ಯಾವುದೇ ನೈಜ ತುರ್ತು ಸೇವೆ ಸಂಪರ್ಕಗೊಂಡಿಲ್ಲ.",
    languagesCount: "10+",
    languagesLabel: "ಭಾಷೆಗಳು",
    scale: "0–100",
    scaleLabel: "SVA ಸ್ಕೇಲ್",
    available: "24/7",
    availableLabel: "ಪ್ರೋಟೋಟೈಪ್ ಫ್ಲೋ",
    human: "ಮಾನವ",
    humanLabel: "ಅಂತಿಮ ನಿರ್ಧಾರ",
    victimFirst: "ಬಾಧಿತರಿಗೆ ಮೊದಲ ಆದ್ಯತೆ",
    victimDescription: "ಸ್ಪಷ್ಟ ಆಯ್ಕೆಗಳು ಮತ್ತು ಸುಲಭ ನಿಯಂತ್ರಣಗಳೊಂದಿಗೆ ಸರಳ ಹಂತಗಳು.",
    explainable: "ವಿವರಿಸಬಹುದಾದ ಸ್ಕ್ರೀನಿಂಗ್",
    explainableDescription: "ಒತ್ತಡ ಮತ್ತು ಆಘಾತದ ಸೂಚನೆಗಳನ್ನು ಸಹಾಯಕ್ಕಾಗಿ ಮಾತ್ರ ತೋರಿಸಲಾಗುತ್ತದೆ.",
    humanControl: "ಮಾನವ ನಿಯಂತ್ರಣ",
    humanDescription: "ಅಧಿಕೃತ ಸಿಬ್ಬಂದಿ ಕ್ರಮದ ಮೊದಲು ಶಿಫಾರಸುಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತಾರೆ.",
    privacyFirst: "ಗೌಪ್ಯತೆ ಮೊದಲು • ಡೆಮೋ ಡೇಟಾ ಮಾತ್ರ",
    aiSuggests: "AI ಸೂಚಿಸುತ್ತದೆ",
    humanVerifies: "ಮಾನವ ಪರಿಶೀಲಿಸುತ್ತಾನೆ",
    authorityDecides: "ಅಧಿಕೃತ ಸಿಬ್ಬಂದಿ ನಿರ್ಧರಿಸುತ್ತಾರೆ",
    authorityDemo: "ಅಧಿಕಾರಿ ಡೆಮೋ",
    complaintTitle: "ಏನಾಯಿತು ಎಂದು ಹೇಳಿ",
    complaintSubtitle: "ನಿಮ್ಮ ಪರಿಸ್ಥಿತಿಯನ್ನು ನಿಮ್ಮದೇ ಪದಗಳಲ್ಲಿ ವಿವರಿಸಿ.",
    complaintPlaceholder: "ನಿಮ್ಮ ದೂರನ್ನು ಬರೆಯಿರಿ...",
    continue: "ಮುಂದುವರಿಸಿ",
    back: "ಹಿಂದಕ್ಕೆ",
    supportTitle: "ಸಹಾಯ ಆಯ್ಕೆಗಳು",
    counselling: "ಸಮಾಲೋಚನಾ ಸಹಾಯ",
    counsellingDescription: "ತರಬೇತಿ ಪಡೆದ ಸಹಾಯ ಸಿಬ್ಬಂದಿಯೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ.",
    legalAid: "ಕಾನೂನು ಸಹಾಯ",
    legalAidDescription: "ಲಭ್ಯವಿರುವ ಕಾನೂನು ಸಹಾಯದ ಮಾಹಿತಿ ಪಡೆಯಿರಿ.",
    helpline: "ಹೆಲ್ಪ್‌ಲೈನ್",
    helplineDescription: "ಅಧಿಕೃತ ಸಹಾಯ ಪ್ರತಿನಿಧಿಯೊಂದಿಗೆ ಮಾತನಾಡಿ.",
    screeningTitle: "ವಿವರಿಸಬಹುದಾದ ಸ್ಕ್ರೀನಿಂಗ್",
    screeningDescription: "ನಿಮ್ಮ ಉತ್ತರಗಳ ಆಧಾರದ ಮೇಲೆ ಸಹಾಯ ಆದ್ಯತೆ ರಚಿಸಲಾಗುತ್ತದೆ. ಇದು ರೋಗನಿರ್ಣಯವಲ್ಲ.",
    priority: "ಸಹಾಯ ಆದ್ಯತೆ",
    low: "ಕಡಿಮೆ",
    medium: "ಮಧ್ಯಮ",
    high: "ಹೆಚ್ಚು",
    submit: "ದೂರು ಸಲ್ಲಿಸಿ",
    submittedTitle: "ದೂರು ಸಲ್ಲಿಸಲಾಗಿದೆ",
    submittedDescription: "ನಿಮ್ಮ ದೂರನ್ನು ಪ್ರೋಟೋಟೈಪ್ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ದಾಖಲಿಸಲಾಗಿದೆ.",
    complaintId: "ದೂರು ID",
    trackNow: "ದೂರು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
    sosTitle: "ತುರ್ತು SOS",
    sosDescription: "ಈ ಪ್ರೋಟೋಟೈಪ್ ತುರ್ತು ಎಸ್ಕಲೇಶನ್ ಅನ್ನು ಅನುಕರಿಸುತ್ತದೆ.",
    confirmSOS: "SOS ದೃಢೀಕರಿಸಿ",
    cancel: "ರದ್ದು",
    trackingTitle: "ದೂರು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
    trackingDescription: "ಪ್ರಸ್ತುತ ಸ್ಥಿತಿಯನ್ನು ನೋಡಲು ದೂರು ID ನಮೂದಿಸಿ.",
    idPlaceholder: "ದೂರು ID ನಮೂದಿಸಿ",
    checkStatus: "ಸ್ಥಿತಿ ಪರಿಶೀಲಿಸಿ",
    statusReceived: "ದೂರು ಸ್ವೀಕರಿಸಲಾಗಿದೆ",
    statusScreening: "ಆರಂಭಿಕ ಸ್ಕ್ರೀನಿಂಗ್ ಪೂರ್ಣಗೊಂಡಿದೆ",
    statusHuman: "ಮಾನವ ಪರಿಶೀಲನೆಗಾಗಿ ಕಾಯುತ್ತಿದೆ",
    statusAuthority: "ಅಧಿಕಾರಿ ಎಸ್ಕಲೇಶನ್",
    home: "ಮುಖಪುಟ",
    complaint: "ದೂರು",
    supportNav: "ಸಹಾಯ",
  },

  ml: {
    name: "Malayalam",
    native: "മലയാളം",
    brand: "സ്വാർത്ഥിക",
    subtitle: "പൊതുസേവന പ്രോട്ടോടൈപ്പ്",
    description: "പരാതികൾ ക്രമീകരിക്കാനും പിന്തുണ ആവശ്യങ്ങൾ തിരിച്ചറിയാനും സ്വാർത്ഥിക സഹായിക്കുന്നു.",
    startComplaint: "പരാതി ആരംഭിക്കുക",
    chooseLanguage: "ഭാഷ തിരഞ്ഞെടുക്കുക",
    trackComplaint: "പരാതി ട്രാക്ക് ചെയ്യുക",
    support: "പിന്തുണ",
    emergencySOS: "അടിയന്തര SOS",
    chatText: "ചാറ്റ് / ടെക്സ്റ്റ്",
    chatDescription: "നിങ്ങളുടെ പരാതി എഴുത്തായി പങ്കിടുക",
    emergencyDescription: "മുൻഗണന ഉയർത്തൽ ഡെമോ",
    privacy: "ഈ പ്രോട്ടോടൈപ്പ് പ്രാദേശിക ഡെമോ ഡാറ്റ ഉപയോഗിക്കുന്നു. യഥാർത്ഥ അടിയന്തര സേവനം ബന്ധിപ്പിച്ചിട്ടില്ല.",
    languagesCount: "10+",
    languagesLabel: "ഭാഷകൾ",
    scale: "0–100",
    scaleLabel: "SVA സ്കെയിൽ",
    available: "24/7",
    availableLabel: "പ്രോട്ടോടൈപ്പ് ഫ്ലോ",
    human: "മനുഷ്യ",
    humanLabel: "അന്തിമ തീരുമാനം",
    victimFirst: "ഇരയ്ക്ക് മുൻഗണന",
    victimDescription: "വ്യക്തമായ തിരഞ്ഞെടുപ്പുകളുള്ള ലളിതമായ ഘട്ടങ്ങൾ.",
    explainable: "വിശദീകരിക്കാവുന്ന സ്ക്രീനിംഗ്",
    explainableDescription: "സമ്മർദ്ദത്തിന്റെയും ആഘാതത്തിന്റെയും സൂചനകൾ പിന്തുണയ്ക്കായി മാത്രം കാണിക്കുന്നു.",
    humanControl: "മനുഷ്യ നിയന്ത്രണം",
    humanDescription: "അംഗീകൃത ജീവനക്കാർ നടപടിക്ക് മുമ്പ് ശുപാർശകൾ പരിശോധിക്കുന്നു.",
    privacyFirst: "സ്വകാര്യത ആദ്യം • ഡെമോ ഡാറ്റ മാത്രം",
    aiSuggests: "AI നിർദ്ദേശിക്കുന്നു",
    humanVerifies: "മനുഷ്യൻ പരിശോധിക്കുന്നു",
    authorityDecides: "അംഗീകൃത ജീവനക്കാർ തീരുമാനിക്കുന്നു",
    authorityDemo: "അധികാരി ഡെമോ",
    complaintTitle: "എന്താണ് സംഭവിച്ചതെന്ന് പറയൂ",
    complaintSubtitle: "നിങ്ങളുടെ സാഹചര്യം നിങ്ങളുടെ സ്വന്തം വാക്കുകളിൽ വിവരിക്കാം.",
    complaintPlaceholder: "നിങ്ങളുടെ പരാതി എഴുതുക...",
    continue: "തുടരുക",
    back: "തിരികെ",
    supportTitle: "പിന്തുണാ ഓപ്ഷനുകൾ",
    counselling: "കൗൺസലിംഗ് പിന്തുണ",
    counsellingDescription: "പരിശീലനം ലഭിച്ച പിന്തുണാ ജീവനക്കാരുമായി ബന്ധപ്പെടുക.",
    legalAid: "നിയമ സഹായം",
    legalAidDescription: "ലഭ്യമായ നിയമ സഹായത്തെക്കുറിച്ച് വിവരങ്ങൾ നേടുക.",
    helpline: "ഹെൽപ്‌ലൈൻ",
    helplineDescription: "അംഗീകൃത പിന്തുണാ പ്രതിനിധിയുമായി സംസാരിക്കുക.",
    screeningTitle: "വിശദീകരിക്കാവുന്ന സ്ക്രീനിംഗ്",
    screeningDescription: "നിങ്ങളുടെ ഉത്തരങ്ങളുടെ അടിസ്ഥാനത്തിൽ പിന്തുണാ മുൻഗണന സൃഷ്ടിക്കുന്നു. ഇത് രോഗനിർണയം അല്ല.",
    priority: "പിന്തുണാ മുൻഗണന",
    low: "കുറവ്",
    medium: "ഇടത്തരം",
    high: "ഉയർന്ന",
    submit: "പരാതി സമർപ്പിക്കുക",
    submittedTitle: "പരാതി സമർപ്പിച്ചു",
    submittedDescription: "നിങ്ങളുടെ പരാതി പ്രോട്ടോടൈപ്പ് സിസ്റ്റത്തിൽ രേഖപ്പെടുത്തി.",
    complaintId: "പരാതി ID",
    trackNow: "പരാതി ട്രാക്ക് ചെയ്യുക",
    sosTitle: "അടിയന്തര SOS",
    sosDescription: "ഈ പ്രോട്ടോടൈപ്പ് അടിയന്തര എസ്കലേഷൻ അനുകരിക്കുന്നു.",
    confirmSOS: "SOS സ്ഥിരീകരിക്കുക",
    cancel: "റദ്ദാക്കുക",
    trackingTitle: "പരാതി ട്രാക്ക് ചെയ്യുക",
    trackingDescription: "നിലവിലെ സ്ഥിതി കാണാൻ പരാതി ID നൽകുക.",
    idPlaceholder: "പരാതി ID നൽകുക",
    checkStatus: "സ്ഥിതി പരിശോധിക്കുക",
    statusReceived: "പരാതി ലഭിച്ചു",
    statusScreening: "പ്രാഥമിക സ്ക്രീനിംഗ് പൂർത്തിയായി",
    statusHuman: "മനുഷ്യ പരിശോധനയ്ക്കായി കാത്തിരിക്കുന്നു",
    statusAuthority: "അധികാരി എസ്കലേഷൻ",
    home: "ഹോം",
    complaint: "പരാതി",
    supportNav: "പിന്തുണ",
  },

  pa: {
    name: "Punjabi",
    native: "ਪੰਜਾਬੀ",
    brand: "ਸਵਾਰਥਿਕਾ",
    subtitle: "ਜਨਤਕ ਸੇਵਾ ਪ੍ਰੋਟੋਟਾਈਪ",
    description: "ਸਵਾਰਥਿਕਾ ਸ਼ਿਕਾਇਤਾਂ ਨੂੰ ਵਿਵਸਥਿਤ ਕਰਨ ਅਤੇ ਸਹਾਇਤਾ ਦੀ ਲੋੜ ਪਛਾਣਨ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ।",
    startComplaint: "ਸ਼ਿਕਾਇਤ ਸ਼ੁਰੂ ਕਰੋ",
    chooseLanguage: "ਭਾਸ਼ਾ ਚੁਣੋ",
    trackComplaint: "ਸ਼ਿਕਾਇਤ ਟ੍ਰੈਕ ਕਰੋ",
    support: "ਸਹਾਇਤਾ",
    emergencySOS: "ਐਮਰਜੈਂਸੀ SOS",
    chatText: "ਚੈਟ / ਟੈਕਸਟ",
    chatDescription: "ਆਪਣੀ ਸ਼ਿਕਾਇਤ ਲਿਖ ਕੇ ਸਾਂਝੀ ਕਰੋ",
    emergencyDescription: "ਤਰਜੀਹ ਵਧਾਉਣ ਦਾ ਡੈਮੋ",
    privacy: "ਇਹ ਪ੍ਰੋਟੋਟਾਈਪ ਸਥਾਨਕ ਡੈਮੋ ਡਾਟਾ ਵਰਤਦਾ ਹੈ। ਕੋਈ ਅਸਲੀ ਐਮਰਜੈਂਸੀ ਸੇਵਾ ਜੁੜੀ ਨਹੀਂ ਹੈ।",
    languagesCount: "10+",
    languagesLabel: "ਭਾਸ਼ਾਵਾਂ",
    scale: "0–100",
    scaleLabel: "SVA ਸਕੇਲ",
    available: "24/7",
    availableLabel: "ਪ੍ਰੋਟੋਟਾਈਪ ਫਲੋ",
    human: "ਮਨੁੱਖ",
    humanLabel: "ਅੰਤਿਮ ਫੈਸਲਾ",
    victimFirst: "ਪੀੜਤ ਪਹਿਲਾਂ",
    victimDescription: "ਸਪਸ਼ਟ ਚੋਣਾਂ ਅਤੇ ਆਸਾਨ ਨਿਯੰਤਰਣਾਂ ਵਾਲੇ ਛੋਟੇ ਕਦਮ।",
    explainable: "ਵਿਆਖਿਆਯੋਗ ਸਕ੍ਰੀਨਿੰਗ",
    explainableDescription: "ਤਣਾਅ ਅਤੇ ਸਦਮੇ ਦੇ ਸੰਕੇਤ ਸਹਾਇਤਾ ਲਈ ਦਿਖਾਏ ਜਾਂਦੇ ਹਨ।",
    humanControl: "ਮਨੁੱਖੀ ਨਿਯੰਤਰਣ",
    humanDescription: "ਅਧਿਕਾਰਤ ਕਰਮਚਾਰੀ ਕਾਰਵਾਈ ਤੋਂ ਪਹਿਲਾਂ ਸਿਫ਼ਾਰਸ਼ਾਂ ਦੀ ਜਾਂਚ ਕਰਦੇ ਹਨ।",
    privacyFirst: "ਗੋਪਨੀਯਤਾ ਪਹਿਲਾਂ • ਸਿਰਫ਼ ਡੈਮੋ ਡਾਟਾ",
    aiSuggests: "AI ਸੁਝਾਅ ਦਿੰਦਾ ਹੈ",
    humanVerifies: "ਮਨੁੱਖ ਜਾਂਚ ਕਰਦਾ ਹੈ",
    authorityDecides: "ਅਧਿਕਾਰਤ ਕਰਮਚਾਰੀ ਫੈਸਲਾ ਕਰਦੇ ਹਨ",
    authorityDemo: "ਅਧਿਕਾਰੀ ਡੈਮੋ",
    complaintTitle: "ਸਾਨੂੰ ਦੱਸੋ ਕੀ ਹੋਇਆ",
    complaintSubtitle: "ਆਪਣੀ ਸਥਿਤੀ ਆਪਣੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਦੱਸੋ।",
    complaintPlaceholder: "ਆਪਣੀ ਸ਼ਿਕਾਇਤ ਲਿਖੋ...",
    continue: "ਜਾਰੀ ਰੱਖੋ",
    back: "ਵਾਪਸ",
    supportTitle: "ਸਹਾਇਤਾ ਵਿਕਲਪ",
    counselling: "ਕਾਊਂਸਲਿੰਗ ਸਹਾਇਤਾ",
    counsellingDescription: "ਸਿਖਲਾਈ ਪ੍ਰਾਪਤ ਸਹਾਇਤਾ ਕਰਮਚਾਰੀਆਂ ਨਾਲ ਜੁੜੋ।",
    legalAid: "ਕਾਨੂੰਨੀ ਸਹਾਇਤਾ",
    legalAidDescription: "ਉਪਲਬਧ ਕਾਨੂੰਨੀ ਸਹਾਇਤਾ ਬਾਰੇ ਜਾਣਕਾਰੀ ਲਓ।",
    helpline: "ਹੈਲਪਲਾਈਨ",
    helplineDescription: "ਅਧਿਕਾਰਤ ਸਹਾਇਤਾ ਪ੍ਰਤੀਨਿਧੀ ਨਾਲ ਗੱਲ ਕਰੋ।",
    screeningTitle: "ਵਿਆਖਿਆਯੋਗ ਸਕ੍ਰੀਨਿੰਗ",
    screeningDescription: "ਤੁਹਾਡੇ ਜਵਾਬਾਂ ਦੇ ਆਧਾਰ 'ਤੇ ਸਹਾਇਤਾ ਤਰਜੀਹ ਬਣਾਈ ਜਾਂਦੀ ਹੈ। ਇਹ ਨਿਦਾਨ ਨਹੀਂ ਹੈ।",
    priority: "ਸਹਾਇਤਾ ਤਰਜੀਹ",
    low: "ਘੱਟ",
    medium: "ਦਰਮਿਆਨਾ",
    high: "ਉੱਚ",
    submit: "ਸ਼ਿਕਾਇਤ ਜਮ੍ਹਾਂ ਕਰੋ",
    submittedTitle: "ਸ਼ਿਕਾਇਤ ਜਮ੍ਹਾਂ ਹੋ ਗਈ",
    submittedDescription: "ਤੁਹਾਡੀ ਸ਼ਿਕਾਇਤ ਪ੍ਰੋਟੋਟਾਈਪ ਸਿਸਟਮ ਵਿੱਚ ਦਰਜ ਕੀਤੀ ਗਈ ਹੈ।",
    complaintId: "ਸ਼ਿਕਾਇਤ ID",
    trackNow: "ਸ਼ਿਕਾਇਤ ਟ੍ਰੈਕ ਕਰੋ",
    sosTitle: "ਐਮਰਜੈਂਸੀ SOS",
    sosDescription: "ਇਹ ਪ੍ਰੋਟੋਟਾਈਪ ਐਮਰਜੈਂਸੀ ਐਸਕੇਲੇਸ਼ਨ ਦਾ ਡੈਮੋ ਕਰਦਾ ਹੈ।",
    confirmSOS: "SOS ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
    cancel: "ਰੱਦ ਕਰੋ",
    trackingTitle: "ਸ਼ਿਕਾਇਤ ਟ੍ਰੈਕ ਕਰੋ",
    trackingDescription: "ਮੌਜੂਦਾ ਸਥਿਤੀ ਦੇਖਣ ਲਈ ਸ਼ਿਕਾਇਤ ID ਦਾਖਲ ਕਰੋ।",
    idPlaceholder: "ਸ਼ਿਕਾਇਤ ID ਦਾਖਲ ਕਰੋ",
    checkStatus: "ਸਥਿਤੀ ਵੇਖੋ",
    statusReceived: "ਸ਼ਿਕਾਇਤ ਪ੍ਰਾਪਤ ਹੋਈ",
    statusScreening: "ਸ਼ੁਰੂਆਤੀ ਸਕ੍ਰੀਨਿੰਗ ਪੂਰੀ",
    statusHuman: "ਮਨੁੱਖੀ ਜਾਂਚ ਦੀ ਉਡੀਕ",
    statusAuthority: "ਅਧਿਕਾਰੀ ਐਸਕੇਲੇਸ਼ਨ",
    home: "ਹੋਮ",
    complaint: "ਸ਼ਿਕਾਇਤ",
    supportNav: "ਸਹਾਇਤਾ",
  },
};

/* =========================================================
   LANGUAGE SELECTOR & MODAL COMPONENTS
========================================================= */

const languageMetadata = [
  { code: "en", name: "English", native: "English", region: "Universal / All India", script: "Latin" },
  { code: "hi", name: "Hindi", native: "हिन्दी", region: "North & Central India", script: "Devanagari" },
  { code: "mr", name: "Marathi", native: "मराठी", region: "Maharashtra", script: "Devanagari" },
  { code: "bn", name: "Bengali", native: "বাংলা", region: "West Bengal & Tripura", script: "Bengali" },
  { code: "ta", name: "Tamil", native: "தமிழ்", region: "Tamil Nadu & Puducherry", script: "Tamil" },
  { code: "te", name: "Telugu", native: "తెలుగు", region: "Andhra Pradesh & Telangana", script: "Telugu" },
  { code: "gu", name: "Gujarati", native: "ગુજરાતી", region: "Gujarat", script: "Gujarati" },
  { code: "kn", name: "Kannada", native: "ಕನ್ನಡ", region: "Karnataka", script: "Kannada" },
  { code: "ml", name: "Malayalam", native: "മലയാളം", region: "Kerala & Lakshadweep", script: "Malayalam" },
  { code: "pa", name: "Punjabi", native: "ਪੰਜਾਬੀ", region: "Punjab & North India", script: "Gurmukhi" },
];

function LanguageBar({ currentLanguage, onChangeLanguage, onOpenModal, t }) {
  const topQuickLangs = ["en", "hi", "mr", "bn", "ta", "te", "gu"];

  return (
    <div className="language-bar-container">
      <div className="language-bar">
        {/* Left Side: Live Discoverability Indicator */}
        <button
          className="lang-discover-badge"
          onClick={onOpenModal}
          title="Click to view all 10 languages / सभी 10 भाषाएं देखें"
        >
          <span className="lang-pulse-dot"></span>
          <Languages size={16} className="lang-icon" />
          <span className="lang-text-summary">
            <strong>10+ Indian Languages</strong> • १०+ भारतीय भाषाएं
          </span>
          <span className="active-tag">{languages[currentLanguage]?.native || "English"}</span>
        </button>

        {/* Center: 1-Click Quick Language Chips */}
        <div className="quick-language-pills" role="tablist">
          {topQuickLangs.map((code) => {
            const lang = languages[code];
            const isSelected = currentLanguage === code;
            return (
              <button
                key={code}
                className={`quick-lang-pill ${isSelected ? "active" : ""}`}
                onClick={() => onChangeLanguage(code)}
                title={`Switch language to ${lang?.name} (${lang?.native})`}
              >
                <span>{lang?.native}</span>
                {isSelected && <span className="pill-active-dot">✓</span>}
              </button>
            );
          })}
        </div>

        {/* Right Side: Open Full Language Modal */}
        <button
          className="all-languages-btn"
          onClick={onOpenModal}
          title="View all 10 languages"
        >
          <Globe2 size={16} />
          <span>{t.chooseLanguage || "Choose language"}</span>
          <span className="lang-pill-count">10+</span>
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

function LanguageModal({ isOpen, onClose, currentLanguage, onSelectLanguage }) {
  const [search, setSearch] = useState("");

  if (!isOpen) return null;

  const filtered = languageMetadata.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.native.toLowerCase().includes(search.toLowerCase()) ||
      item.region.toLowerCase().includes(search.toLowerCase()) ||
      item.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="language-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-header">
          <div className="modal-title-wrap">
            <div className="modal-icon-badge">
              <Languages size={22} />
            </div>
            <div>
              <h3>Choose Language / अपनी भाषा चुनें</h3>
              <p>Instant translation across all complaint, screening and support features</p>
            </div>
          </div>
          <button className="close-button" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div className="modal-search-bar">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search language / भाषा खोजें (e.g. Hindi, Tamil, मराठी, te)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
          {search && (
            <button className="clear-btn" onClick={() => setSearch("")}>
              <X size={14} />
            </button>
          )}
        </div>

        <div className="languages-grid">
          {filtered.map((item) => {
            const isSelected = currentLanguage === item.code;
            return (
              <button
                key={item.code}
                className={`language-grid-card ${isSelected ? "selected" : ""}`}
                onClick={() => {
                  onSelectLanguage(item.code);
                  onClose();
                }}
              >
                <div className="card-top">
                  <span className="card-native">{item.native}</span>
                  {isSelected ? (
                    <span className="active-badge">
                      <Check size={13} /> Active
                    </span>
                  ) : (
                    <span className="code-badge">{item.code.toUpperCase()}</span>
                  )}
                </div>
                <div className="card-bottom">
                  <span className="card-name">{item.name}</span>
                  <span className="card-region">{item.region}</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="modal-footer-tip">
          <Sparkles size={15} />
          <span>Select any language to switch instantly without losing your current progress.</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  const [language, setLanguage] = useState("en");
  const [page, setPage] = useState("home");
  const [complaint, setComplaint] = useState("");
  const [showSOS, setShowSOS] = useState(false);
  const [showLangModal, setShowLangModal] = useState(false);
  const [complaintId, setComplaintId] = useState("SWA-14566-2026");
  const [complaintsHistory, setComplaintsHistory] = useState([
    {
      id: "SWA-14566-2026",
      date: "30 Aug 2026, 02:15 PM",
      description: "Workplace distress & verbal intimidation report requesting psychological counseling support.",
      status: "Under Review",
      priority: "High",
      stage: 3,
    },
    {
      id: "SWA-13982-2026",
      date: "27 Aug 2026, 11:40 AM",
      description: "Severe emotional anxiety and panic distress following public transit incident.",
      status: "Screening Done",
      priority: "Medium",
      stage: 2,
    },
    {
      id: "SWA-12401-2026",
      date: "21 Aug 2026, 04:20 PM",
      description: "Legal guidance requested regarding cyberstalking and unwanted personal communications.",
      status: "Authority Action",
      priority: "High",
      stage: 4,
    },
    {
      id: "SWA-11029-2026",
      date: "14 Aug 2026, 09:10 AM",
      description: "Urgent tele-support counseling session conducted and emotional coping resources provided.",
      status: "Resolved",
      priority: "Low",
      stage: 4,
    },
  ]);

  const t = languages[language] || languages.en;

  const changeLanguage = (value) => {
    setLanguage(value);
  };

  const handleSubmitComplaint = () => {
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const newId = `SWA-${randomNum}-2026`;
    const now = new Date();
    const formattedDate =
      now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }) +
      `, ` +
      now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const newRecord = {
      id: newId,
      date: formattedDate,
      description:
        complaint.trim() ||
        "Emotional distress and support request submitted via web prototype.",
      status: "Under Review",
      priority: "High",
      stage: 2,
    };

    setComplaintId(newId);
    setComplaintsHistory((prev) => [newRecord, ...prev]);
    setPage("submitted");
  };

  return (
    <div className="app">

      {/* ================= HEADER ================= */}

      <header className="header">

        <div className="brand-area" onClick={() => setPage("home")}>

          <img
            src="/swarthika.png"
            alt="Swarthika"
            className="logo"
          />

          <div className="brand-text">
            <div className="brand-name">{t.brand}</div>
            <div className="brand-subtitle">{t.subtitle}</div>
          </div>

        </div>

        <nav className="desktop-nav">

          <button onClick={() => setPage("tracking")}>
            <History size={17} />
            {t.trackComplaint}
          </button>

          <button onClick={() => setPage("support")}>
            <LifeBuoy size={17} />
            {t.support}
          </button>

          <button
            className="sos-button"
            onClick={() => setShowSOS(true)}
          >
            <AlertTriangle size={17} />
            {t.emergencySOS}
          </button>

        </nav>

      </header>

      {/* ================= INTERACTIVE LANGUAGE BAR ================= */}

      <LanguageBar
        currentLanguage={language}
        onChangeLanguage={changeLanguage}
        onOpenModal={() => setShowLangModal(true)}
        t={t}
      />

      {/* ================= MAIN ================= */}

      <main>

        {page === "home" && (
          <HomePage
            t={t}
            setPage={setPage}
            setShowSOS={setShowSOS}
          />
        )}

        {page === "complaint" && (
          <ComplaintPage
            t={t}
            complaint={complaint}
            setComplaint={setComplaint}
            setPage={setPage}
          />
        )}

        {page === "support" && (
          <SupportPage t={t} setPage={setPage} />
        )}

        {page === "screening" && (
          <ScreeningPage
            t={t}
            complaintId={complaintId}
            setPage={setPage}
            onSubmitComplaint={handleSubmitComplaint}
          />
        )}

        {page === "submitted" && (
          <SubmittedPage
            t={t}
            complaintId={complaintId}
            setPage={setPage}
          />
        )}

        {page === "tracking" && (
          <ComplaintHistoryPage
            t={t}
            complaintsHistory={complaintsHistory}
            setPage={setPage}
            setComplaint={setComplaint}
          />
        )}

      </main>

      {/* ================= FAQ SECTION ================= */}

      <FAQSection />

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div>
          <LockKeyhole size={15} />
          {t.privacyFirst}
        </div>

        <div className="footer-flow">
          <span>{t.aiSuggests}</span>
          <ArrowRight size={13} />
          <span>{t.humanVerifies}</span>
          <ArrowRight size={13} />
          <span>{t.authorityDecides}</span>
        </div>

        <button onClick={() => setPage("support")}>
          {t.authorityDemo}
        </button>

      </footer>

      {/* ================= SOS MODAL ================= */}

      {showSOS && (
        <div className="modal-overlay">

          <div className="sos-modal">

            <button
              className="close-button"
              onClick={() => setShowSOS(false)}
            >
              <X size={20} />
            </button>

            <div className="sos-icon">
              <AlertTriangle size={35} />
            </div>

            <h2>{t.sosTitle}</h2>

            <p>{t.sosDescription}</p>

            <div className="sos-actions">

              <button
                className="cancel-btn"
                onClick={() => setShowSOS(false)}
              >
                {t.cancel}
              </button>

              <button
                className="confirm-btn"
                onClick={() => {
                  setShowSOS(false);
                  setPage("submitted");
                }}
              >
                <Phone size={17} />
                {t.confirmSOS}
              </button>

            </div>

          </div>

        </div>
      )}

      {/* ================= LANGUAGE MODAL ================= */}

      <LanguageModal
        isOpen={showLangModal}
        onClose={() => setShowLangModal(false)}
        currentLanguage={language}
        onSelectLanguage={changeLanguage}
      />

    </div>
  );
}

/* =========================================================
   HOME PAGE
========================================================= */

function HomePage({ t, setPage, setShowSOS }) {
  return (
    <section className="home-page">

      <div className="hero-grid">

        <div className="hero-content">

          <div className="security-label">
            <ShieldCheck size={17} />
            {t.victimFirst}
          </div>

          <h1>{t.description}</h1>

          <div className="hero-actions">

            <button
              className="primary-button"
              onClick={() => setPage("complaint")}
            >
              {t.startComplaint}
              <ArrowRight size={19} />
            </button>

          </div>

          <div className="stats">

            <Stat
              value={t.languagesCount}
              label={t.languagesLabel}
            />

            <Stat
              value={t.scale}
              label={t.scaleLabel}
            />

            <Stat
              value={t.available}
              label={t.availableLabel}
            />

            <Stat
              value={t.human}
              label={t.humanLabel}
            />

          </div>

        </div>

        <div className="hero-card">

          {/* 1. Chatbot Option (Light Blue Effect) */}
          <div
            className="service-card chat-card"
            onClick={() => setPage("complaint")}
          >
            <div className="service-icon chat-icon">
              <MessageSquare size={24} />
            </div>

            <div className="card-info">
              <div className="card-title-row">
                <h3>{t.chatText}</h3>
                <span className="chat-badge">AI Assistant</span>
              </div>
              <p>{t.chatDescription}</p>
            </div>

            <div className="chat-action-pill">
              <MessageSquare size={13} />
              <span>Chat</span>
            </div>
          </div>

          {/* 2. Direct Call on 14566 Helpline (Light Green Effect) */}
          <a
            href="tel:14566"
            className="service-card helpline-call-card"
            title="Call National Helpline 14566 / 14566 पर कॉल करें"
          >
            <div className="service-icon call-icon">
              <Phone size={24} />
            </div>

            <div className="card-info">
              <div className="card-title-row">
                <h3>{t.helpline || "Helpline"} — 14566</h3>
                <span className="tollfree-tag">24/7 Toll-Free</span>
              </div>
              <p>{t.helplineDescription || "Speak directly with trained support personnel"}</p>
            </div>

            <div className="call-action-pill">
              <Phone size={13} />
              <span>Call 14566</span>
            </div>
          </a>

          {/* 3. SOS Option (Light Red Effect) */}
          <div
            className="service-card emergency-card"
            onClick={() => setShowSOS(true)}
          >
            <div className="service-icon emergency-icon">
              <AlertTriangle size={24} />
            </div>

            <div className="card-info">
              <div className="card-title-row">
                <h3>{t.emergencySOS}</h3>
                <span className="sos-badge">Instant Priority</span>
              </div>
              <p>{t.emergencyDescription}</p>
            </div>

            <div className="sos-action-pill">
              <AlertTriangle size={13} />
              <span>SOS</span>
            </div>
          </div>

          <div className="privacy-box">
            <LockKeyhole size={17} />
            <span>{t.privacy}</span>
          </div>

        </div>

      </div>

      <div className="feature-grid">

        <FeatureCard
          icon={<ShieldCheck />}
          title={t.victimFirst}
          description={t.victimDescription}
        />

        <FeatureCard
          icon={<Activity />}
          title={t.explainable}
          description={t.explainableDescription}
        />

        <FeatureCard
          icon={<UserRound />}
          title={t.humanControl}
          description={t.humanDescription}
        />

      </div>

    </section>
  );
}

/* =========================================================
   COMPLAINT PAGE
========================================================= */

function ComplaintPage({
  t,
  complaint,
  setComplaint,
  setPage,
}) {
  return (
    <section className="page-container">

      <button
        className="back-link"
        onClick={() => setPage("home")}
      >
        <ArrowLeft size={17} />
        {t.back}
      </button>

      <div className="page-header">

        <div className="page-icon blue">
          <MessageSquare />
        </div>

        <h1>{t.complaintTitle}</h1>

        <p>{t.complaintSubtitle}</p>

      </div>

      <div className="complaint-card">

        <textarea
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          placeholder={t.complaintPlaceholder}
        />

        <div className="input-tools">
          <button>
            <Mic size={18} />
          </button>

          <span>
            <LockKeyhole size={14} />
            Private prototype input
          </span>
        </div>

        <button
          className="primary-button full"
          disabled={complaint.trim().length < 5}
          onClick={() => setPage("screening")}
        >
          {t.continue}
          <ArrowRight size={19} />
        </button>

      </div>

    </section>
  );
}

/* =========================================================
   SCREENING
========================================================= */

function ScreeningPage({ t, complaintId, setPage }) {
  const score = 72;

  return (
    <section className="page-container">

      <button
        className="back-link"
        onClick={() => setPage("complaint")}
      >
        <ArrowLeft size={17} />
        {t.back}
      </button>

      <div className="page-header">

        <div className="page-icon purple">
          <Activity />
        </div>

        <h1>{t.screeningTitle}</h1>

        <p>{t.screeningDescription}</p>

      </div>

      <div className="screening-card">

        <div className="score-top">
          <div>
            <span>{t.priority}</span>
            <h2>{score}/100</h2>
          </div>

          <div className="priority-badge">
            {t.high}
          </div>
        </div>

        <div className="progress">
          <div style={{ width: `${score}%` }}></div>
        </div>

        <div className="scale-labels">
          <span>{t.low}</span>
          <span>{t.medium}</span>
          <span>{t.high}</span>
        </div>

        <div className="screening-explanation">

          <div>
            <CheckCircle2 size={19} />
            <span>Stress indicators detected</span>
          </div>

          <div>
            <CheckCircle2 size={19} />
            <span>Immediate support recommended</span>
          </div>

          <div>
            <CheckCircle2 size={19} />
            <span>Human verification required</span>
          </div>

        </div>

        <button
          className="primary-button full"
          onClick={() => setPage("submitted")}
        >
          {t.submit}
          <Send size={18} />
        </button>

      </div>

    </section>
  );
}

/* =========================================================
   SUBMITTED PAGE
========================================================= */

function SubmittedPage({ t, complaintId, setPage }) {
  return (
    <section className="success-page">

      <div className="success-icon">
        <CheckCircle2 size={48} />
      </div>

      <h1>{t.submittedTitle}</h1>

      <p>{t.submittedDescription}</p>

      <div className="complaint-id">

        <span>{t.complaintId}</span>

        <strong>{complaintId}</strong>

      </div>

      <div className="success-actions">

        <button
          className="primary-button"
          onClick={() => setPage("tracking")}
        >
          {t.trackNow}
          <ArrowRight size={18} />
        </button>

        <button
          className="secondary-button"
          onClick={() => setPage("home")}
        >
          {t.home}
        </button>

      </div>

    </section>
  );
}

/* =========================================================
   TRACKING PAGE
========================================================= */

function TrackingPage({
  t,
  trackingId,
  setTrackingId,
}) {
  const hasId = trackingId.length > 3;

  return (
    <section className="page-container">

      <div className="page-header">

        <div className="page-icon blue">
          <ClipboardList />
        </div>

        <h1>{t.trackingTitle}</h1>

        <p>{t.trackingDescription}</p>

      </div>

      <div className="tracking-card">

        <div className="tracking-input">

          <FileText size={19} />

          <input
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder={t.idPlaceholder}
          />

        </div>

        <button className="primary-button">
          {t.checkStatus}
          <ArrowRight size={18} />
        </button>

      </div>

      {hasId && (
        <div className="timeline">

          <TimelineItem
            active
            title={t.statusReceived}
            description="SWA-14566"
          />

          <TimelineItem
            active
            title={t.statusScreening}
            description="Prototype screening"
          />

          <TimelineItem
            active
            title={t.statusHuman}
            description="Verification queue"
          />

          <TimelineItem
            title={t.statusAuthority}
            description="Pending"
          />

        </div>
      )}

    </section>
  );
}

/* =========================================================
   SUPPORT PAGE
========================================================= */

function SupportPage({ t, setPage }) {
  return (
    <section className="page-container">

      <div className="page-header">

        <div className="page-icon green">
          <HeartHandshake />
        </div>

        <h1>{t.supportTitle}</h1>

        <p>
          {t.humanDescription}
        </p>

      </div>

      <div className="support-grid">

        <SupportCard
          icon={<HeartHandshake />}
          title={t.counselling}
          description={t.counsellingDescription}
        />

        <SupportCard
          icon={<Scale />}
          title={t.legalAid}
          description={t.legalAidDescription}
        />

        <SupportCard
          icon={<Headphones />}
          title={t.helpline}
          description={t.helplineDescription}
        />

      </div>

      <button
        className="primary-button"
        onClick={() => setPage("complaint")}
      >
        {t.startComplaint}
        <ArrowRight size={18} />
      </button>

    </section>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function Stat({ value, label }) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">

      <div className="feature-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

    </div>
  );
}

function SupportCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="support-card">

      <div className="support-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <button className="text-button">
        Learn more
        <ArrowRight size={16} />
      </button>

    </div>
  );
}

function TimelineItem({
  active,
  title,
  description,
}) {
  return (
    <div className={`timeline-item ${active ? "active" : ""}`}>

      <div className="timeline-dot">
        {active && <CheckCircle2 size={15} />}
      </div>

      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

    </div>
  );
}

/* =========================================================
   FAQ SECTION
========================================================= */

const FAQ_ITEMS = [
  {
    id: "q1",
    question: "What is the SWARTHIKA portal?",
    answer:
      "SWARTHIKA (Supporting Women And Reporting Through Holistic Integrated Knowledge Access) is an AI-assisted, human-controlled prototype designed to help survivors of atrocities — especially SC/ST community members — safely file complaints, receive priority screening, and access emotional and legal support. All decisions remain with trained human authorities; the AI only suggests, never decides.",
  },
  {
    id: "q2",
    question: "Why is this portal helpful?",
    answer:
      "Traditional complaint processes can be slow, intimidating, and inaccessible to marginalized communities. SWARTHIKA provides a 24/7, multilingual, privacy-first platform where survivors can describe their situation in their own words. An explainable AI triage score helps authorities prioritize urgent cases faster, while ensuring no action is taken without human review. It also connects users instantly to counselling, legal aid, and the national helpline 14566.",
  },
  {
    id: "q3",
    question: "What are atrocities against SC/ST communities?",
    answer:
      "Atrocities under the SC/ST Act refer to acts of violence, humiliation, social boycott, economic exploitation, and intimidation specifically targeting Scheduled Castes (Dalits) and Scheduled Tribes. These include: forced untouchability practices, preventing access to public places, verbal abuse using caste slurs, sexual violence, destruction of property, and denial of livelihood. These acts are distinct from general crimes because they are motivated by the victim's caste or tribal identity, causing deep psychological and social harm beyond physical injury.",
  },
  {
    id: "q4",
    question: "What are the key laws protecting SC/ST communities?",
    answer: null,
    listItems: [
      { title: "SC/ST (Prevention of Atrocities) Act, 1989", desc: "The primary law that lists and criminalizes specific offences against SC/ST persons. It provides for stringent punishment, special courts, and rights for victims including relief and rehabilitation." },
      { title: "SC/ST (Prevention of Atrocities) Amendment Act, 2015", desc: "Expanded the list of offences, introduced provisions for anticipatory bail restrictions, and strengthened the rights of victims to be heard at every stage of the case." },
      { title: "Protection of Civil Rights Act, 1955", desc: "Penalizes the practice of untouchability in any form and enforces civil rights guaranteed under Article 17 of the Constitution of India." },
      { title: "Indian Penal Code / BNS 2023", desc: "Covers additional offences like assault, criminal intimidation, wrongful confinement, and grievous hurt applicable in atrocity cases." },
      { title: "Article 17 — Constitution of India", desc: "Abolishes untouchability and forbids its practice in any form. Enforcement of any disability arising out of untouchability is an offence punishable by law." },
    ],
  },
];

function FAQSection() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="faq-section">
      <div className="faq-inner">

        <div className="faq-header">
          <div className="faq-header-icon">
            <Scale size={22} />
          </div>
          <div>
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-subtitle">
              Understanding SWARTHIKA, SC/ST atrocities &amp; your rights
            </p>
          </div>
        </div>

        <div className="faq-list">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronRight size={18} className={`faq-chevron ${isOpen ? "rotated" : ""}`} />
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    {item.answer && <p>{item.answer}</p>}
                    {item.listItems && (
                      <ul className="faq-law-list">
                        {item.listItems.map((law, i) => (
                          <li key={i}>
                            <span className="law-title">{law.title}</span>
                            <span className="law-desc">{law.desc}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="faq-disclaimer">
          <ShieldCheck size={13} />
          This information is for awareness only and does not constitute legal advice. For legal assistance, contact NALSA (National Legal Services Authority) or a qualified advocate.
        </p>

      </div>
    </section>
  );
}

/* =========================================================
   START APP
========================================================= */

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);