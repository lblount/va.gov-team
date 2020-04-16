scenario.cdc_wrapper_messages = {

cdcSymptomCheckerPreText: `
The Centers for Disease Control and Prevention (CDC) designed this tool to help you decide when to seek medical care. If you'd like to come back to choose another topic in the VA coronavirus chatbot, you can refresh the page to start over.
`,

cdcSymptomCheckerPostText: {
  /* CDC msg0: Please make a selection so I can help give you care advice. */
  msg0: `
**[IF user receives CDC "Pease make a selection so I can help give you care advice" message]**

If you'd prefer to get information about the coronavirus COVID-19 and VA health care, benefits, and services, you can start over and choose another topic.
  `,

  /* CDC msg1: Sounds like you are feeling ok */
  msg1: `
**If you’re not sure about your symptoms,** our [Annie COVID-19 automated text messaging service]( https://www.mobile.va.gov/app/annie-app-veterans) can help you monitor your symptoms and tell you when you should see your health care provider. <br>

**If you'd like to talk with your VA health care provider,** you can [send a secure message](https://www.myhealth.va.gov/mhv-portal-web/user-login?redirect=/mhv-portal-web/home) through My HealtheVet.
  `,

  /* CDC msg2: Call 911 - You may be having a medical emergency. */
  msg2: `
**Remember:** For emergencies, you don’t need a referral or approval from VA to go to a non-VA ER in your community.
  `,

  /* CDC msg3: Sorry, this Coronavirus Self-Checker is for people who are at least 2 years old */
  msg3: `
If you'd like to get more answers to questions about COVID-19 and VA benefits and services, visit our [coronavirus FAQs](https://www.va.gov/coronavirus-veteran-frequently-asked-questions/).
  `,

  /* CDC msg4: Urgent medical attention may be needed. Please go to the Emergency Department */
  msg4: `
[Find your nearest VA health facility with emergency care](https://www.va.gov/find-locations/)

**Remember:** You can also go to the nearest ER in your community. For emergencies, you don’t need a referral or approval from VA to go to a non-VA ER.
  `,

  /* CDC msg5: Sorry you’re feeling sick. Call a medical provider within 24 hours */
  msg5: `
**To contact your VA provider or request a telehealth visit by phone or video, you can:**
- [Send a secure message to your provider](https://www.myhealth.va.gov/mhv-portal-web/user-login?redirect=/mhv-portal-web/home) through My HealtheVet.
- [Try our new health chat app (limited availability)](https://www.mobile.va.gov/app/va-health-chat) if your primary VA health facility is one of the [select locations](https://www.mobile.va.gov/app/va-health-chat) testing this new feature.
- [Request a telehealth appointment online](https://www.va.gov/health-care/schedule-view-va-appointments/) for some types of appointments.

**If you decide to go to a VA facility for urgent care**

**Please contact us first.** You can send a [secure message to your provider](https://www.myhealth.va.gov/mhv-portal-web/user-login?redirect=/mhv-portal-web/home) or call your facility’s advice nurse before going to a clinic or walk-in urgent care facility. <br>
[Find a VA location](https://www.va.gov/find-locations)

Please don't go to the ER for nonmedical emergencies. This helps us protect you, other patients, and our staff from community spread of the coronavirus COVID-19 and address critical medical needs first during this time.
  `,

  /* CDC msg7: Contact a healthcare provider in the long-term care facility where you live */
  msg7: `
If you have non-urgent questions, you can [send a secure message to your VA provider](https://www.myhealth.va.gov/mhv-portal-web/user-login?redirect=/mhv-portal-web/home) through My HealtheVet.

We're taking many precautions to help protect Veterans in our VA nursing homes. This includes limiting outside visitors. <br>[Learn more about steps we’re taking to protect Veterans in nursing homes](https://www.va.gov/opa/pressrel/pressrelease.cfm?id=5400).
  `,

  /* CDC msg8: Stay home and take care of yourself. Call your provider if you get worse */
  msg8: `
**If you’re not sure about your symptoms,** our [Annie COVID-19 automated text messaging service]( https://www.mobile.va.gov/app/annie-app-veterans) can help you monitor your symptoms and tell you when you should see your health care provider. <br>

### To contact your VA provider or request a telehealth visit by phone or video, you can:
- [Send a secure message to your provider](https://www.myhealth.va.gov/mhv-portal-web/user-login?redirect=/mhv-portal-web/home) through My HealtheVet.
- [Try our new health chat app (limited availability)](https://www.mobile.va.gov/app/va-health-chat) if your primary VA health facility is one of the [select locations](https://www.mobile.va.gov/app/va-health-chat) testing this new feature.
- [Request a telehealth appointment online](https://www.va.gov/health-care/schedule-view-va-appointments/) for some types of appointments.

### If you decide to go to a VA facility for urgent care

**Please contact us first.** You can send a [secure message to your provider](https://www.myhealth.va.gov/mhv-portal-web/user-login?redirect=/mhv-portal-web/home) or call your facility’s advice nurse before going to a clinic or walk-in urgent care facility. <br>
[Find a VA location](https://www.va.gov/find-locations)

Please don't go to the ER for nonmedical emergencies. This helps us protect you, other patients, and our staff from community spread of the coronavirus COVID-19 and address critical medical needs first during this time.
  `,

  /* CDC msg9: Stay home and take care of yourself in home isolation */
  msg9: `
**To contact your VA provider or request a telehealth visit by phone or video, you can:**
- [Send a secure message to your provider](https://www.myhealth.va.gov/mhv-portal-web/user-login?redirect=/mhv-portal-web/home) through My HealtheVet.
- [Try our new health chat app (limited availability)](https://www.mobile.va.gov/app/va-health-chat) if your primary VA health facility is one of the [select locations](https://www.mobile.va.gov/app/va-health-chat) testing this new feature.
- [Request a telehealth appointment online](https://www.va.gov/health-care/schedule-view-va-appointments/) for some types of appointments.

**If you decide to go to a VA facility for urgent care**

**Please contact us first.** You can send a [secure message to your provider](https://www.myhealth.va.gov/mhv-portal-web/user-login?redirect=/mhv-portal-web/home) or call your facility’s advice nurse before going to a clinic or walk-in urgent care facility. <br>
[Find a VA location](https://www.va.gov/find-locations)

Please don't go to the ER for nonmedical emergencies. This helps us protect you, other patients, and our staff from community spread of the coronavirus COVID-19 and address critical medical needs first during this time.
  `,

  /* CDC msg10: Sorry you’re feeling ill. Stay at home and monitor your symptoms. */
  msg10: `
**If you’re not sure about your symptoms,** our [Annie COVID-19 automated text messaging service]( https://www.mobile.va.gov/app/annie-app-veterans) can help you monitor your symptoms and tell you when you should see your health care provider. <br>

**To contact your VA provider or request a telehealth visit by phone or video, you can:**
- [Send a secure message to your provider](https://www.myhealth.va.gov/mhv-portal-web/user-login?redirect=/mhv-portal-web/home) through My HealtheVet.
- [Try our new health chat app (limited availability)](https://www.mobile.va.gov/app/va-health-chat) if your primary VA health facility is one of the [select locations](https://www.mobile.va.gov/app/va-health-chat) testing this new feature.
- [Request a telehealth appointment online](https://www.va.gov/health-care/schedule-view-va-appointments/) for some types of appointments.

**If you decide to go to a VA facility for urgent care**

**Please contact us first.** You can send a [secure message to your provider](https://www.myhealth.va.gov/mhv-portal-web/user-login?redirect=/mhv-portal-web/home) or call your facility’s advice nurse before going to a clinic or walk-in urgent care facility. <br>
[Find a VA location](https://www.va.gov/find-locations)

Please don't go to the ER for nonmedical emergencies. This helps us protect you, other patients, and our staff from community spread of the coronavirus COVID-19 and address critical medical needs first during this time.
  `
}

};
