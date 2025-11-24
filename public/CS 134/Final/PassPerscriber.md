### **Name of the Site:**

PassPerscriber

### **Purpose and Goals**

The purpose of PassPerscriber is to act as a dual-function security resource: it educates people about password security while simultaneously providing a tool to generate custom, strong passwords for their use.

### **Audiences**

* **Primary Audience:** Non-technical internet users who are aware of security risks but may feel inconvenienced or overwhelmed by creating strong passwords.  
* **Secondary Audience:** Students and general users who frequently sign up for new online services, games, or accounts and need a fast, reliable way to generate a new, unique password.

### **Scope and Structure**

**Critical Features (Initial Site):**

* Password Generator Tool  
* Password Length Slider  
* Checkbox for Uppercase Letters  
* Checkbox for Numbers  
* Checkbox for Symbols  
* "Generate" Button  
* Password Output Field  
* "Copy to Clipboard" Button  
* Informational Section: "What is a Weak Password?"  
* Informational Section: "Quick Security Tips" (e.g., 2FA, Password Managers)

### **Implementation and Reflection**

* **Implementation:** This site will be implemented as a static, frontend-only application. HTML will provide the structure for the generator tool and the informational content. CSS will be used to style the site, aiming for a clean, trustworthy, and easy-to-use interface. The core logic will be powered by JavaScript, which will handle reading the user's criteria (length, character types), running the algorithm to randomly generate a password, and managing the "copy to clipboard" functionality.  
* **Reflection:** The site's purpose is to bridge the gap between convenience and security. By "prescribing" a strong password (the tool) and explaining *why* it's necessary (the education), the site provides both an immediate solution and long-term value to the user, helping them build safer online habits.

**Organizational Sketch (Single-Page Layout):**

| PassPerscriber                                                    \[Generator\] \[Basics\] \[Scams\] | Navigation Bar |
| ----- | :---- |
|  **Secure Password** f\#9d@jF0s\!mB \[Copy\] \[(Re)Generate\]  Length: \[- \- \- \- \- \- \- o \- \- \- \-\] 16 \[x\] Uppercase \[x\] Numbers \[Special Chars\]  | Generator Page |
|  **Password Basics** Lorem ipsum … **What’s a Weak Password?** Lorem ipsum…… **Top Tips** Lorem ipsum Lorem  | Basics of a Good Password Page |
|  **Phishing Emails** Lorem ipsum examples \[image example\] **Fake Login Pages** Lorem ipsum \[imagres\] **SMS Scams (Smishing)** Lorem Ipsum \[imagres example\]  | Common Scams and Lookout Page |

