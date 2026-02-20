const questions = [
    // Page 4 - Constituent Assembly
    { q: "The Constitution of India was enacted by a Constituent Assembly set up:", opts: ["under the Cabinet Mission Plan, 1946", "under the Indian Independence Act, 1947", "under a resolution of the Provisional Government", "by the Indian National Congress"], a: "under the Cabinet Mission Plan, 1946" },
    { q: "The members of the Constituent Assembly were:", opts: ["elected by the provincial assemblies", "directly elected by the people", "nominated by various political parties", "nominated by the rulers of the Indian state"], a: "elected by the provincial assemblies" },
    { q: "The Constituent Assembly set up under the Cabinet Mission Plan had a strength of:", opts: ["389 members", "411 members", "298 members", "487 members"], a: "389 members" },
    { q: "The first meeting of the Constituent Assembly of India was held on:", opts: ["09th December 1946", "26th January 1948", "16th August 1947", "26th November 1947"], a: "09th December 1946" },
    { q: "Who acted as the Provisional President of the Constituent Assembly?", opts: ["Dr. Sachhidanand Sinha", "C. Rajagopalachari", "Dr. Rajendra Prasad", "Jawaharlal Nehru"], a: "Dr. Sachhidanand Sinha" },
    { q: "On December 11, 1946, the Constituent Assembly elected whom as its permanent Chairman?", opts: ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "Dr. B.R. Ambedkar", "K.M. Munshi"], a: "Dr. Rajendra Prasad" },
    { q: "Who acted as the Chairman of the Drafting Committee?", opts: ["Dr. B.R. Ambedkar", "C. Rajagopalachari", "Dr. Rajendra Prasad", "Jawaharlal Nehru"], a: "Dr. B.R. Ambedkar" },
    { q: "The Objective Resolution, which outlined the philosophy of the Constitution, was moved by:", opts: ["Jawaharlal Nehru", "Dr. S. Radhakrishnan", "Dr. Rajendra Prasad", "Dr. B.R. Ambedkar"], a: "Jawaharlal Nehru" },
    { q: "The Constitution of India was adopted on:", opts: ["26th November 1949", "26th January 1950", "26th January 1949", "31st December 1949"], a: "26th November 1949" },
    
    // Page 6 - General Structure
    { q: "Who is regarded as the architect of the Indian Constitution?", opts: ["Dr. B.R. Ambedkar", "Jawaharlal Nehru", "B.N. Rau", "Rajendra Prasad"], a: "Dr. B.R. Ambedkar" },
    { q: "The Constitution of India came into force on:", opts: ["26th January 1950", "26th January 1952", "15th August 1947", "26th November 1949"], a: "26th January 1950" },
    { q: "The Constitution of India, at present, contains:", opts: ["over 440 Articles", "395 Articles", "295 Articles", "259 Articles"], a: "over 440 Articles" },
    { q: "How many schedules the Constitution of India contains?", opts: ["12", "9", "10", "11"], a: "12" },
    { q: "Into how many parts or chapters has the Indian Constitution been divided?", opts: ["22", "1", "11", "21"], a: "22" },
    { q: "The Constitution describes the Indian Union as:", opts: ["India, i.e., Bharat", "India, i.e., Bharatvarsha", "India, i.e., Hindustan", "None of these"], a: "India, i.e., Bharat" },
    
    // Page 9 & 10 - Writs & Rights
    { q: "For the enforcement of Fundamental Rights, the courts can issue:", opts: ["a writ", "a decree", "an ordinance", "a notification"], a: "a writ" },
    { q: "Which one of the following is a bulwark of personal freedom?", opts: ["Habeas Corpus", "Quo Warranto", "Mandamus", "Certiorari"], a: "Habeas Corpus" },
    { q: "The writ of Habeas Corpus is issued:", opts: ["to produce a person before court who has been detained", "to transfer record of proceedings", "to do something in nature of duty", "to stop proceedings"], a: "to produce a person before court who has been detained" },
    { q: "The writ of Quo Warranto is an order from a superior court:", opts: ["to show under what authority he is holding office", "to produce a person detained by an official", "to stop proceedings in a particular case", "to transfer a case pending before it"], a: "to show under what authority he is holding office" },
    { q: "Which of the following writs literally means 'you may have the body'?", opts: ["Habeas Corpus", "Mandamus", "Quo Warranto", "Certiorari"], a: "Habeas Corpus" },
    
    // Page 14 - Parliament
    { q: "The maximum gap between two sessions of Parliament can be:", opts: ["six months", "four months", "one year", "nine months"], a: "six months" },
    { q: "An integral part of the Parliament is:", opts: ["The President of India", "The Prime Minister of India", "The Chief Justice of India", "The Election Commissioner"], a: "The President of India" },
    { q: "The function of the Pro-Temp Speaker is to:", opts: ["swear-in members and hold charge till a regular Speaker is elected", "conduct proceedings in absence of Speaker", "officiate when Speaker is unlikely to be elected", "Check election certificates"], a: "swear-in members and hold charge till a regular Speaker is elected" },
    { q: "The quorum or minimum number of members required to hold a meeting of Parliament is:", opts: ["one-tenth", "one-fourth", "one-third", "one-fifth"], a: "one-tenth" },
    
    // Page 15 - President & Lok Sabha
    { q: "To be eligible for election as President, a candidate must be:", opts: ["over 35 years of age", "over 60 years of age", "over 55 years of age", "there is no age limit"], a: "over 35 years of age" },
    { q: "Who of the following is considered the custodian of Lok Sabha?", opts: ["the Speaker", "the leader of Opposition", "the Prime Minister", "the Chief Whip"], a: "the Speaker" },
    { q: "The Speaker of the Lok Sabha has to address his letter of resignation to:", opts: ["the Deputy Speaker of the Lok Sabha", "the Prime Minister", "the President", "the Vice-President"], a: "the Deputy Speaker of the Lok Sabha" }
// Add these to your questions.js array
    // Page 10 - Writs & Fundamental Rights
    { q: "The writ of Mandamus is issued by a superior court:", opts: ["to command a person or public authority to do something in the nature of public duty", "to produce an illegally detained person before a court", "to stop proceedings in a case in national interest", "in all these cases"], a: "to command a person or public authority to do something in the nature of public duty" },
    { q: "The writ of Certiorari is issued by a superior court:", opts: ["to an inferior court to transfer the record of proceedings in a case for its review", "to an inferior court to stop further proceedings in a particular case", "to an officer to show his right to hold a particular office", "to a public authority to produce a person detained by it"], a: "to an inferior court to transfer the record of proceedings in a case for its review" },
    { q: "Which of the following writs literally means 'what is your authority'?", opts: ["Quo Warranto", "Habeas Corpus", "Certiorari", "Prohibition"], a: "Quo Warranto" },
    { q: "Jobs are reserved for SC and ST category:", opts: ["on the basis of annual income", "at the time of appointment", "at the time of pay review", "on all these conditions"], a: "at the time of appointment" },
    { q: "Right to Privacy includes:", opts: ["right to personal liberty", "right to move freely throughout the country", "right to reside in any part of the country", "right to practice any profession"], a: "right to personal liberty" },
    
    // Page 11 - Freedoms & Protection
    { q: "Freedom of Press is included in:", opts: ["right to freedom of speech and expression", "right to carry on any occupation or profession", "right to personal liberty", "right to equality before law"], a: "right to freedom of speech and expression" },
    { q: "A person arrested under punitive detention enjoys the right to:", opts: ["be informed of the reason for the arrest and detention", "consult a lawyer of his choice", "be produced before the magistrate", "all of these"], a: "all of these" },
    { q: "Which of the following comes under the jurisdiction of both the High Courts and the Supreme Court?", opts: ["protection of the Fundamental Rights", "disputes between the Centre and the States", "disputes between the states inter state", "protection against violation of the Constitution"], a: "protection of the Fundamental Rights" },
    { q: "A Member of Parliament enjoys immunity from prosecution for having said anything:", opts: ["during the session of the Parliament", "in the Parliament and its committees", "at a Press Conference", "at any of these places"], a: "in the Parliament and its committees" },
    
    // Page 12 - Guardians & Age Limits
    { q: "Which of the following is the guardian of the Fundamental Rights of the people?", opts: ["The Supreme Court of India", "The President of India", "The Parliament", "The Legislature"], a: "The Supreme Court of India" },
    { q: "As per Article 21A, the State shall provide free and compulsory education for all children until they complete the age of:", opts: ["14 years", "10 years", "20 years", "18 years"], a: "14 years" },
    { q: "In which Articles the Right to Freedom of Religion is guaranteed?", opts: ["25 - 28", "14 - 18", "19 - 21", "36 - 51"], a: "25 - 28" },
    
    // Page 13 - Fundamental Duties
    { q: "Fundamental Duties of the Indian citizens were:", opts: ["added to the Constitution by the 42nd amendment", "enshrined in the original Constitution", "added to the Constitution by the 44th Amendment", "added by the Supreme Court judgment in Keshavananda Bharati case"], a: "added to the Constitution by the 42nd amendment" },
    { q: "The Fundamental Duties of citizens:", opts: ["are contained in Part IV-A of Constitution", "lie scattered throughout the Constitution", "are contained in Schedule IX of Constitution", "are contained in the Presidential Order issued in 1979"], a: "are contained in Part IV-A of Constitution" },
    { q: "Which one of the following has wrongly listed as a duty of Indian citizens?", opts: ["to practice family planning and control population", "to uphold and protect the sovereignty and integrity of the country", "to promote harmony and the spirit common brotherhood", "to protect and preserve the natural environment"], a: "to practice family planning and control population" },
    
    // Page 14 - Parliament Continued
    { q: "An integral part of the Parliament is:", opts: ["the President of India", "the Prime Minister of India", "the Chief Justice of India", "the Election Commissioner"], a: "the President of India" },
    { q: "The quorum or minimum number of members required to hold the meeting of either house of Parliament is:", opts: ["one-tenth", "one-fourth", "one-third", "one-fifth"], a: "one-tenth" },
    { q: "The differences between the two houses of Parliament are resolved through:", opts: ["a joint session of the two houses", "mediatory efforts of the two houses", "a joint committee of the two houses specially constituted", "the mediation of Minister for Parliamentary Affair"], a: "a joint session of the two houses" },

    // Page 15 - Lok Sabha & President
    { q: "Who among the following may belong to the Rajya Sabha but can speak in both the Lok Sabha and the Rajya Sabha?", opts: ["ministers who are members of the Rajya Sabha", "nominated members of the Rajya Sabha who are experts", "the Deputy Chairman of the Rajya Sabha", "the leader of the house in the Rajya Sabha"], a: "ministers who are members of the Rajya Sabha" },
    { q: "The Constitution has vested the executive power of the Union Government in:", opts: ["the President", "the Prime Minister", "the Council of Ministers", "all the above three"], a: "the President" },
    { q: "To be eligible for election as President a candidate must be:", opts: ["over 35 years of age", "over 60 years of age", "over 55 years of age", "there is no age limit"], a: "over 35 years of age" }
// Add these to your questions.js array
    // Page 12 - 13: Rights and Liberties
    { q: "Which one of the following Fundamental Rights was described by Dr. B.R. Ambedkar as 'the heart and soul of Constitution'?", opts: ["right to constitutional remedies", "right to equality", "right to religion", "all the above"], a: "right to constitutional remedies" },
    { q: "A person cannot be detained under Preventive Detention law beyond a period of:", opts: ["three months", "six months", "two months", "six weeks"], a: "three months" },
    { q: "Article 33 of Indian Constitution prohibits:", opts: ["the right of the armed forces personnel to form association and unions", "discrimination on matters of public appointment", "the practice of 'Untouchability' in any form", "all the above"], a: "the right of the armed forces personnel to form association and unions" },
    { q: "Constitution empowers the state governments to make special law and provisions for:", opts: ["Women and Children", "Workers in the Mines", "Farmers", "All of these"], a: "Women and Children" },
    { q: "Who are not entitled to form association?", opts: ["Police Constables", "Merchants", "Teachers", "Farmers"], a: "Police Constables" },
    { q: "Which one of the following has wrongly listed as a duty of Indian citizens?", opts: ["to practice family planning and control population", "to uphold and protect the sovereignty and integrity of the country", "to promote harmony and the spirit common brotherhood", "to protect and preserve the natural environment"], a: "to practice family planning and control population" },
    { q: "Fundamental duty demands:", opts: ["To abide by the Constitution", "To work sincerely", "To avoid corruption and delay in work", "To abide by moral rules"], a: "To abide by the Constitution" },

    // Page 11 & 16: The Executive and Judiciary
    { q: "Who decides the disputes regarding election of the President?", opts: ["the Supreme Court", "the Election Commission", "the Parliament", "both Supreme Court and High Courts"], a: "the Supreme Court" },
    { q: "If the President wishes to tender his resignation before the expiry of his normal term, he has to address the same to:", opts: ["the Vice-President of India", "the Speaker of Lok Sabha", "the Chief Justice of India", "the Election Commission"], a: "the Vice-President of India" },
    { q: "The Vice-President is the ex-officio Chairman of:", opts: ["the Rajya Sabha", "the National Development Council", "the Planning Commission", "None of the above"], a: "the Rajya Sabha" },
    { q: "The members of Lok Sabha are:", opts: ["directly elected by the people", "indirectly elected through state legislatures", "partly nominated and partly elected indirectly", "partly elected directly and partly elected indirectly"], a: "directly elected by the people" },
    { q: "The Speaker of the Lok Sabha is:", opts: ["elected by the members of the Lok Sabha", "appointed by the President", "appointed by the President on recommendations of the Prime Minister", "elected by the members of the two houses at a joint sitting"], a: "elected by the members of the Lok Sabha" },
    { q: "The Parliament or a state legislature can declare a seat vacant if a member is absent without permission from the sessions for:", opts: ["60 days", "90 days", "30 days", "120 days"], a: "60 days" },

    // Page 17 & 18: State and High Courts
    { q: "The Indian Judiciary is a:", opts: ["single and integrated judicial system", "highest law making body", "dependent system on legislature and executive", "Act on the orders by the Indian Parliament"], a: "single and integrated judicial system" },
    { q: "The administrators of Union Territories are designated as:", opts: ["Lieutenant Governor", "Governor", "Commissioner", "Chief Secretary"], a: "Lieutenant Governor" },
    { q: "The Supreme Court of India enjoys the power of judicial review which implies that it can:", opts: ["declare the laws passed by the legislature and orders issued by the executive as unconstitutional, if they contravene any provision of the Constitution", "review its own judgements", "initiate cases at its own discretion", "review the working of the subordinate courts"], a: "declare the laws passed by the legislature and orders issued by the executive as unconstitutional, if they contravene any provision of the Constitution" },
    { q: "The members of the State Legislative Council are:", opts: ["partly elected and partly nominated", "wholly elected directly by the people", "wholly elected indirectly", "wholly nominated"], a: "partly elected and partly nominated" },
    { q: "The Chief Justice and other judges of the High Court are appointed by:", opts: ["the President of India", "the Governor", "the Prime Minister", "the Chief Justice of India"], a: "the President of India" }
// Add these to your questions.js array to reach 100
    // Page 15-16: The Executive & President
    { q: "A member, after being elected as Speaker of Lok Sabha, generally:", opts: ["cuts off his connections with his party", "becomes the Chief Spokesman of his party", "continues to be a member of the party and seeks to promote its interests", "joins the ruling party"], a: "cuts off his connections with his party" },
    { q: "The Constitution has vested the executive power of the Union Government in:", opts: ["the President", "the Prime Minister", "the Council of Ministers", "all the above three"], a: "the President" },
    { q: "Who decides the disputes regarding election of the President?", opts: ["the Supreme Court", "the Election Commission", "the Parliament", "both Supreme Court and High Courts"], a: "the Supreme Court" },
    { q: "The Vice-President is the ex-officio Chairman of:", opts: ["the Rajya Sabha", "the National Development Council", "the Planning Commission", "None of the above"], a: "the Rajya Sabha" },
    { q: "The Speaker of the Lok Sabha is:", opts: ["elected by the members of the Lok Sabha", "appointed by the President", "appointed by the President on recommendations of the Prime Minister", "elected by the members of the two houses at a joint sitting"], a: "elected by the members of the Lok Sabha" },
    { q: "The Parliament or a state legislature can declare a seat vacant if a member is absent without permission from the sessions for:", opts: ["60 days", "90 days", "30 days", "120 days"], a: "60 days" },

    // Page 17-18: State Judiciary & Governance
    { q: "No person can contest elections for the membership of the Lok Sabha... unless he is a citizen of India and has completed the age of:", opts: ["25 years", "28 years and 30 years respectively", "18 years and 21 years respectively", "30 years"], a: "25 years" },
    { q: "Who of the following is the executive head of a State?", opts: ["the Governor", "the Chief Minister", "the President", "None of these"], a: "the Governor" },
    { q: "The Indian Judiciary is a:", opts: ["single and integrated judicial system", "highest law making body", "dependent system on legislature and executive", "Act on the orders by the Indian Parliament"], a: "single and integrated judicial system" },
    { q: "The administrators of Union Territories are designated as:", opts: ["Lieutenant Governor", "Governor", "Commissioner", "Chief Secretary"], a: "Lieutenant Governor" },
    { q: "While imparting justice, the Supreme Court relies on the principle of:", opts: ["Procedure established by law", "Rule of Law", "Due process of law", "All of these"], a: "Procedure established by law" },
    { q: "A judge of the Supreme Court can relinquish office before the completion of his tenure addressing his resignation to:", opts: ["the President", "the Chief Justice of India", "the Union Law Minister", "the Prime Minister of India"], a: "the President" },
    { q: "The members of the State Legislative Council are:", opts: ["partly elected and partly nominated", "wholly elected directly by the people", "wholly elected indirectly", "wholly nominated"], a: "partly elected and partly nominated" },
    { q: "The maximum gap between two sessions of Parliament can be:", opts: ["six months", "four months", "one year", "nine months"], a: "six months" },
    { q: "The Chief Justice and other judges of the High Court are appointed by:", opts: ["the President of India", "the Governor", "the Prime Minister", "the Chief Justice of India"], a: "the President of India" },
    
    // Additional derived from your image bank (to reach the full count)
    { q: "The idea of the Constitution of India was flashed for the first time by:", opts: ["M.N. Roy", "B.R. Ambedkar", "Dr. Rajendra Prasad", "None of these"], a: "M.N. Roy" },
    { q: "The Constitution of India provides:", opts: ["single citizenship", "double citizenship", "contains no provision regarding citizenship", "provides multiple citizenship"], a: "single citizenship" },
    { q: "Which one of the following freedom... has been abolished?", opts: ["freedom to acquire, hold, use and dispose of property", "freedom to assemble peacefully with arms", "freedom to reside and settle in any part of the country", "freedom to carry on any profession, occupation, trade or business"], a: "freedom to acquire, hold, use and dispose of property" },
    { q: "The theory of 'basic structure of the Constitution' implies:", opts: ["that certain features of the Constitution are so basic to the Constitution that they cannot be abrogated", "that certain features can be changed by the Parliament with prior approval of majority of state legislatures", "that certain features can be changed only after seeking prior approval of the majority of the judges of the Supreme Court", "none of the above"], a: "that certain features of the Constitution are so basic to the Constitution that they cannot be abrogated" },
    { q: "Minority may be:", opts: ["Linguistic or religious", "Regional or national", "Racial or regional", "Gender and racial"], a: "Linguistic or religious" }
// Add these to your questions.js array
    { q: "Fundamental duty demands:", opts: ["To abide by the Constitution", "To work sincerely", "To avoid corruption and delay in work", "To abide by moral rules"], a: "To abide by the Constitution" },
    { q: "Fundamental duties were incorporated in the constitution by the:", opts: ["42nd Amendment Act, 1976", "44th Amendment Act, 1978", "25th Amendment Act, 1976", "42nd Amendment Act, 1978"], a: "42nd Amendment Act, 1976" },
    { q: "The quorum or minimum number of members required to hold the meeting of either house of Parliament is:", opts: ["one-tenth", "one-fourth", "one-third", "one-fifth"], a: "one-tenth" },
    { q: "Which of the following bills can be introduced in the Parliament only with the prior approval of the President?", opts: ["Money Bills", "bill pertaining to impeachment of President", "bill pertaining to powers of the Supreme Court", "all these"], a: "Money Bills" },
    { q: "Who among the following may belong to the Rajya Sabha but can speak in both the Lok Sabha and the Rajya Sabha?", opts: ["ministers who are members of the Rajya Sabha", "nominated members of the Rajya Sabha who are experts of a particular field", "the Deputy Chairman of the Rajya Sabha", "the leader of the house in the Rajya Sabha"], a: "ministers who are members of the Rajya Sabha" },
    { q: "A member, after being elected as Speaker of Lok Sabha, generally:", opts: ["cuts off his connections with his party", "becomes the Chief Spokesman of his party", "continues to be a member of the party and seeks to promote its interests", "joins the ruling party"], a: "cuts off his connections with his party" },
    { q: "To be eligible for election as President a candidate must be:", opts: ["over 35 years of age", "over 60 years of age", "over 55 years of age", "there is no age limit prescribed by the Constitution"], a: "over 35 years of age" },
    { q: "Who decides the disputes regarding election of the President?", opts: ["the Supreme Court", "the Election Commission", "the Parliament", "both Supreme Court and High Courts"], a: "the Supreme Court" },
    { q: "The Vice-President is the ex-officio Chairman of:", opts: ["the Rajya Sabha", "the National Development Council", "the Planning Commission", "None of the above"], a: "the Rajya Sabha" },
    { q: "The members of Lok Sabha are:", opts: ["directly elected by the people", "indirectly elected through state legislatures", "partly nominated and partly elected indirectly", "partly elected directly and partly elected indirectly"], a: "directly elected by the people" },
    { q: "The Parliament or a state legislature can declare a seat vacant if a member is absent without permission from the sessions for:", opts: ["60 days", "90 days", "30 days", "120 days"], a: "60 days" },
    { q: "The Indian Judiciary is a:", opts: ["single and integrated judicial system", "highest law making body", "dependent system on legislature and executive", "Act on the orders by the Indian Parliament"], a: "single and integrated judicial system" },
    { q: "The administrators of Union Territories are designated as:", opts: ["Lieutenant Governor", "Governor", "Commissioner", "Chief Secretary"], a: "Lieutenant Governor" },
    { q: "While imparting justice, the Supreme Court relies on the principle of:", opts: ["Procedure established by law", "Rule of Law", "Due process of law", "All of these"], a: "Procedure established by law" },
    { q: "The members of the State Legislative Council are:", opts: ["partly elected and partly nominated", "wholly elected directly by the people", "wholly elected indirectly", "wholly nominated"], a: "partly elected and partly nominated" },
    { q: "The maximum gap between two sessions of Parliament can be:", opts: ["six months", "four months", "one year", "nine months"], a: "six months" },
    { q: "The Chief Justice and other judges of the High Court are appointed by:", opts: ["the President of India", "the Governor", "the Prime Minister", "the Chief Justice of India"], a: "the President of India" },
    { q: "Minority may be:", opts: ["Linguistic or religious", "Regional or national", "Racial or regional", "Gender and racial"], a: "Linguistic or religious" },
    { q: "Freedom of Press is included in:", opts: ["right to freedom of speech and expression", "right to carry on any occupation or profession", "right to personal liberty", "right to equality before law"], a: "right to freedom of speech and expression" },
    { q: "Which of the following comes under the jurisdiction of both the High Courts and the Supreme Court?", opts: ["protection of the Fundamental Rights", "disputes between the Centre and the States", "disputes between the states inter state", "protection against violation of the Constitution"], a: "protection of the Fundamental Rights" }
];
