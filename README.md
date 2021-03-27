## Real Estate Transaction User Interface


The HTML, CSS, and JavaScript files in this repository have been developed as a user interface for a Solidity real estate smart contract. The smart contract concept is illustrated in the following flow chart:
<br>
<br>
![flow_chart](img/flow_chart.jpg)
<br>
<br>
There is an assumption that the local municipality has a system in place to tokenize each property in their jurisdiction which then allows smart contract deals to take place. The user interface would be located on the local municipality's server (or on the IPFS - InterPlanetary File System similar to the cloud) and would be accessible by the property owner and by the property buyer.

A self-guided demonstration is available at www.thecryptocrib.com. **Please note this is not a secure site, and sensitive information should not be entered into the provided fields.**

While all sub-pages are functional, the Main and Seller Input pages are the only ones that contain the project requirements. The following features have been included on one or both of these pages:

* Navigation menu that expands or stacks at various screen sizes (CSS)
* Flexbox Grid used to space items in the header (CSS)
* All pages have a field that displays the current date. (JavaScript)
* Form used for Seller Input information. Email address format is validated. (JavaScript)
* Two media queries were established - one for desktop screen sizes and one for tablet screen sizes. The header, navigation, and page format will adjust appropriately for the designated screen size.


TODO: The various input fields and other designated information will need to transfer to the contract whenever Submit is executed on the pages(web3.js)