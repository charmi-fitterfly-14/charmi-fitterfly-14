// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

app = angular
  .module("app", [
    "ngRoute",
    "ngAnimate",
    "checklist-model",
    "daterangepicker",
    "as.sortable", "pdf", "ngDragDrop","rzSlider"
  ])
  .filter("rawHtml", [
    "$sce",
    function ($sce) {
      return function (val) {
        return $sce.trustAsHtml(val);
      };
    }
  ])
  .filter("trustedUrl", [
    "$sce",
    function ($sce) {
      return function (url) {
        return $sce.trustAsResourceUrl(url);
      };
    }
  ]);

BASE_URL = "https://fufktuvpdl.execute-api.ap-south-1.amazonaws.com/sandbox";
//Gunavant Jambu
//Integrated new API for serve Interaction 
NODE_INTERACTION_URL = "https://apiv2.fitterfly.com";
INTERACTIONS_URL = "https://nwgnt570o9.execute-api.ap-south-1.amazonaws.com/Prod";
DEVICE_URL = "https://devices.fitterfly.com";
NAAP_URL = "https://portal.nas-nsdl.com/index.php?route=account/customerpartner/orderinfo&order_id=";


AppConstants = {
  appName: "pwp-CoachDashboard",
  baseUrl: BASE_URL,
  nodeInteractionUrl: NODE_INTERACTION_URL,
  interactionsUrl: INTERACTIONS_URL,
  naapUrl: NAAP_URL,
  interfaceType: 'cd',
  deviceUrl: DEVICE_URL
};
// updated by kunj to synchronized it with Dtx Dashboard

REFERRAL_SMS_FOLLOW_UP = [
  { id: '1', day: '1', name: 'Day 1', text: "Greetings from __PROGRAM_NAME__ Coach! We're calling you to help you get started on our program. We'll try again shortly - kindly answer the call from or give a missed call on __MOB_NO__" },
  { id: '2', day: '2', name: 'Day 2', text: "Your health goals are just one phone call away! Please answer the call from or give a missed call on __MOB_NO__ - the __PROGRAM_NAME__ Coach team is excited to talk to you." },
  { id: '3', day: '3', name: 'Day 3', text: "You're missing out! The __PROGRAM_NAME__ Coach team is trying to call you to help you get healthy. Please pick up the call from __MOB_NO__ - we'll call again shortly – or give a missed call on the same number." },
  { id: '4', day: '7', name: 'Day 7', text: "Hello! The __PROGRAM_NAME__ Coach team is trying to reach you to help you get started. We'll call again shortly - pick up the call from or give a missed call on __MOB_NO__." },
  { id: '5', day: '14', name: 'Day 14', text: "Uh oh! It looks like we missed you again. Someone from the __PROGRAM_NAME__ team will try calling you again - please answer the call from or give a missed call on __MOB_NO__." },
  { id: '6', day: '21', name: 'Day 21', text: "Greetings from __PROGRAM_NAME__ Coach. Our representative tried calling you multiple times. We understand that you might be busy. Please call us on __MOB_NO__ to connect with us again. Our team is eager to help you! " },
  { id: 'tmp1', day: 'Template 1', name: 'Template 1', text: "Dear (Patient Name),##you missed a call regarding your interest in Diabefly, India’s Leading Digital Diabetes Management Program that has proven to control blood sugar levels and is trusted by 1000s of patients throughout India.##Don't miss out on good health, let me know when I can call you.##Alternatively, you may call me on (Agents Number).##Good health always, #(Name of agent)" },
  { id: 'nat1', day: 'Nurture 1', name: 'Nurture 1', text: "Hello (Patient Name),##STOP following general advice like 'cut out sugar', 'reduce rice', 'go for walks' and find out what REALLY WORKS for YOU.\n\nhttps://youtu.be/X5PbhcRsC4U \n\nWith Diabefly Pro, thousands of people have found out what exactly is causing their blood sugar spikes. And surprise! The answer is not the same for everyone.##Watch the video and let me know if you have any questions about this new-age diabetes management program." },
  { id: 'nat2', day: 'Nurture 2', name: 'Nurture 2', text: "Watch how Capt. Handa lost 10 kg, controlled his blood sugar, reduced insulin while still continuing to enjoy his food with Diabefly:\n\n https://www.youtube.com/watch?v=9WQYhp4XjGc" },
  { id: 'other', day: 'other', name:'Other', text:""}
];

