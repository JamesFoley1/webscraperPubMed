
let authors = [
    {"author": "Green TA", "title": "Medical calculators: Prevalence, and barriers to use.", "location": "Informatics Institute, 241 Naka Hall, University of Missouri, Columbia, MO 65211-2060, United States."}, 
    {"author": "Whitt S", "title": "Medical calculators: Prevalence, and barriers to use.", "location": "School of Medicine, 1 Hospital Drive, University of Missouri Health System, Columbia, MO 65212, United States."}, 
    {"author": "Belden JL", "title": "Medical calculators: Prevalence, and barriers to use.", "location": "School of Medicine, 1 Hospital Drive, University of Missouri Health System, Columbia, MO 65212, United States."}, 
    {"author": "Erdelez S", "title": "Medical calculators: Prevalence, and barriers to use.", "location": "School of Library & Information Science, Simmons University, M109, Boston, MA, United States."}, 
    {"author": "Shyu CR", "title": "Medical calculators: Prevalence, and barriers to use.", "location": "Informatics Institute, 241 Naka Hall, University of Missouri, Columbia, MO 65211-2060, United States; Electrical Engineering and Computer Science Department, United States; School of Medicine, 1 Hospital Drive, University of Missouri Health System, Columbia, MO 65212, United States. Electronic address: shyuc@missouri.edu."}, 
    {"author": "Day MA", "title": "EMR Happy Hour: New Approach to Electronic Medical Record Continuous Learning.", "location": "University of Missouri, Columbia, Missouri daym@health.missouri.edu."}, 
    {"author": "Belden JL", "title": "EMR Happy Hour: New Approach to Electronic Medical Record Continuous Learning.", "location": "University of Missouri, Columbia, Missouri."}, 
    {"author": "Shaffer VA", "title": "Patient Judgments About Hypertension Control: The Role of Variability, Trends, and Outliers in Visualized Blood Pressure Data.", "location": "University of Missouri, Department of Psychological Sciences, Columbia, MO, United States."}, 
    {"author": "Wegier P", "title": "Patient Judgments About Hypertension Control: The Role of Variability, Trends, and Outliers in Visualized Blood Pressure Data.", "location": ["Sinai Health System, Temmy Latner Center for Palliative Care, Toronto, ON, Canada.", "Sinai Health System, Lunenfeld-Tanenbaum Research Institute, Toronto, ON, Canada."]}, 
    {"author": "Valentine KD", "title": "Patient Judgments About Hypertension Control: The Role of Variability, Trends, and Outliers in Visualized Blood Pressure Data.", "location": "University of Missouri, Department of Psychological Sciences, Columbia, MO, United States."}, 
    {"author": "Belden JL", "title": "Patient Judgments About Hypertension Control: The Role of Variability, Trends, and Outliers in Visualized Blood Pressure Data.", "location": "University of Missouri, Department of Family & Community Medicine, Columbia, MO, United States."}, 
    {"author": "Canfield SM", "title": "Patient Judgments About Hypertension Control: The Role of Variability, Trends, and Outliers in Visualized Blood Pressure Data.", "location": "University of Missouri, Department of Family & Community Medicine, Columbia, MO, United States."}, 
    {"author": "Patil SJ", "title": "Patient Judgments About Hypertension Control: The Role of Variability, Trends, and Outliers in Visualized Blood Pressure Data.", "location": "University of Missouri, Department of Family & Community Medicine, Columbia, MO, United States."}, 
    {"author": "Popescu M", "title": "Patient Judgments About Hypertension Control: The Role of Variability, Trends, and Outliers in Visualized Blood Pressure Data.", "location": "University of Missouri, Department of Health Management & Informatics, Columbia, MO, United States."}, 
    {"author": "Steege LM", "title": "Patient Judgments About Hypertension Control: The Role of Variability, Trends, and Outliers in Visualized Blood Pressure Data.", "location": "University of Wisconsin, School of Nursing, Madison, WI, United States."}, 
    {"author": "Jain A", "title": "Patient Judgments About Hypertension Control: The Role of Variability, Trends, and Outliers in Visualized Blood Pressure Data.", "location": "University of Missouri, Department of Electrical and Computer Engineering, Columbia, MO, United States."}, 
    {"author": "Koopman RJ", "title": "Patient Judgments About Hypertension Control: The Role of Variability, Trends, and Outliers in Visualized Blood Pressure Data.", "location": "University of Missouri, Department of Family & Community Medicine, Columbia, MO, United States."}, 
    {"author": "Belden JL", "title": "Designing a medication timeline for patients and physicians.", "location": ["Department of Family and Community Medicine, School of Medicine, University of Missouri, Columbia, Missouri, USA.", "MU Informatics Institute, University of Missouri, Columbia, Missouri, USA."]}, 
    {"author": "Wegier P", "title": "Designing a medication timeline for patients and physicians.", "location": ["Department of Family and Community Medicine, School of Medicine, University of Missouri, Columbia, Missouri, USA.", "Temmy Latner Centre for Palliative Care, Sinai Health System, Toronto, Ontario, Canada.", "Lunenfeld-Tanenbaum Research Institute, Sinai Health System, Toronto, Ontario, Canada.", "Department of Family & Community Medicine, University of Toronto, Toronto, Ontario, Canada."]}, 
    {"author": "Patel J", "title": "Designing a medication timeline for patients and physicians.", "location": "GoInvo, Boston, Massachusetts, USA."}, 
    {"author": "Hutson A", "title": "Designing a medication timeline for patients and physicians.", "location": "Department of Health Sciences, School of Health Professions, University of Missouri, Columbia, Missouri, USA."}, 
    {"author": "Plaisant C", "title": "Designing a medication timeline for patients and physicians.", "location": "Human Computer Interaction Laboratory, Institute for Advanced Computer Studies, University of Maryland, College Park, Maryland, USA."}, 
    {"author": "Moore JL", "title": "Designing a medication timeline for patients and physicians.", "location": ["MU Informatics Institute, University of Missouri, Columbia, Missouri, USA.", "The School of Information Science and Learning Technologies, College of Education, University of Missouri, Columbia, Missouri, USA."]}, 
    {"author": "Lowrance NJ", "title": "Designing a medication timeline for patients and physicians.", "location": "The School of Information Science and Learning Technologies, College of Education, University of Missouri, Columbia, Missouri, USA."}, 
    {"author": "Boren SA", "title": "Designing a medication timeline for patients and physicians.", "location": ["MU Informatics Institute, University of Missouri, Columbia, Missouri, USA.", "Department of Health Management and Informatics, School of Medicine, University of Missouri, Columbia, Missouri, USA."]}, 
    {"author": "Koopman RJ", "title": "Designing a medication timeline for patients and physicians.", "location": "Department of Family and Community Medicine, School of Medicine, University of Missouri, Columbia, Missouri, USA."}, 
    {"author": "Belden JL", "title": "Dynamic Electronic Health Record Note Prototype: Seeing More by Showing Less.", "location": "From the Department of Family and Community Medicine (JLB, RJK, SJP, JBS), the School of Information Science and Learning Technologies, College of Education (NJL), the Department of Health Management & Informatics (GFP), and the Informatics Institute (JLB), University of Missouri-Columbia, Columbia, MO. beldenj@health.missouri.edu."}, 
    {"author": "Koopman RJ", "title": "Dynamic Electronic Health Record Note Prototype: Seeing More by Showing Less.", "location": "From the Department of Family and Community Medicine (JLB, RJK, SJP, JBS), the School of Information Science and Learning Technologies, College of Education (NJL), the Department of Health Management & Informatics (GFP), and the Informatics Institute (JLB), University of Missouri-Columbia, Columbia, MO."}, 
    {"author": "Patil SJ", "title": "Dynamic Electronic Health Record Note Prototype: Seeing More by Showing Less.", "location": "From the Department of Family and Community Medicine (JLB, RJK, SJP, JBS), the School of Information Science and Learning Technologies, College of Education (NJL), the Department of Health Management & Informatics (GFP), and the Informatics Institute (JLB), University of Missouri-Columbia, Columbia, MO."}, 
    {"author": "Lowrance NJ", "title": "Dynamic Electronic Health Record Note Prototype: Seeing More by Showing Less.", "location": "From the Department of Family and Community Medicine (JLB, RJK, SJP, JBS), the School of Information Science and Learning Technologies, College of Education (NJL), the Department of Health Management & Informatics (GFP), and the Informatics Institute (JLB), University of Missouri-Columbia, Columbia, MO."}, 
    {"author": "Petroski GF", "title": "Dynamic Electronic Health Record Note Prototype: Seeing More by Showing Less.", "location": "From the Department of Family and Community Medicine (JLB, RJK, SJP, JBS), the School of Information Science and Learning Technologies, College of Education (NJL), the Department of Health Management & Informatics (GFP), and the Informatics Institute (JLB), University of Missouri-Columbia, Columbia, MO."}, 
    {"author": "Smith JB", "title": "Dynamic Electronic Health Record Note Prototype: Seeing More by Showing Less.", "location": "From the Department of Family and Community Medicine (JLB, RJK, SJP, JBS), the School of Information Science and Learning Technologies, College of Education (NJL), the Department of Health Management & Informatics (GFP), and the Informatics Institute (JLB), University of Missouri-Columbia, Columbia, MO."}, 
    {"author": "Clarke MA", "title": "Toward a patient-centered ambulatory after-visit summary: Identifying primary care patients' information needs.", "location": "a Department of Internal Medicine , University of Nebraska Medical Center , Omaha , NE , USA."}, 
    {"author": "Moore JL", "title": "Toward a patient-centered ambulatory after-visit summary: Identifying primary care patients' information needs.", "location": ["b School of Information Science and Learning Technologies, University of Missouri , Columbia , MO , USA.", "f Informatics Institute, University of Missouri , Columbia , MO , USA."]}, 
    {"author": "Steege LM", "title": "Toward a patient-centered ambulatory after-visit summary: Identifying primary care patients' information needs.", "location": "c School of Nursing, University of Wisconsin , Madison , WI , USA."}, 
    {"author": "Koopman RJ", "title": "Toward a patient-centered ambulatory after-visit summary: Identifying primary care patients' information needs.", "location": "d Department of Family and Community Medicine , University of Missouri , Columbia , MO , USA."}, 
    {"author": "Belden JL", "title": "Toward a patient-centered ambulatory after-visit summary: Identifying primary care patients' information needs.", "location": ["d Department of Family and Community Medicine , University of Missouri , Columbia , MO , USA.", "f Informatics Institute, University of Missouri , Columbia , MO , USA."]}, 
    {"author": "Canfield SM", "title": "Toward a patient-centered ambulatory after-visit summary: Identifying primary care patients' information needs.", "location": "d Department of Family and Community Medicine , University of Missouri , Columbia , MO , USA."}, 
    {"author": "Kim MS", "title": "Toward a patient-centered ambulatory after-visit summary: Identifying primary care patients' information needs.", "location": ["e Department of Health Management and Informatics , University of Missouri , Columbia , MO , USA.", "f Informatics Institute, University of Missouri , Columbia , MO , USA."]}, 
    {"author": "Clarke MA", "title": "How Does Learnability of Primary Care Resident Physicians Increase After Seven Months of Using an Electronic Health Record? A Longitudinal Study.", "location": "Department of Internal Medicine, Division of Cardiology, University of Nebraska Medical Center, Omaha, NE, United States."}, 
    {"author": "Belden JL", "title": "How Does Learnability of Primary Care Resident Physicians Increase After Seven Months of Using an Electronic Health Record? A Longitudinal Study.", "location": []}, 
    {"author": "Kim MS", "title": "How Does Learnability of Primary Care Resident Physicians Increase After Seven Months of Using an Electronic Health Record? A Longitudinal Study.", "location": []}, 
    {"author": "Clarke MA", "title": "Health information needs, sources, and barriers of primary care patients to achieve patient-centered care: A literature review.", "location": "University of Nebraska Medical Center, USA."}, 
    {"author": "Moore JL", "title": "Health information needs, sources, and barriers of primary care patients to achieve patient-centered care: A literature review.", "location": "University of Missouri, USA."}, 
    {"author": "Steege LM", "title": "Health information needs, sources, and barriers of primary care patients to achieve patient-centered care: A literature review.", "location": "University of Wisconsin-Madison, USA."}, 
    {"author": "Koopman RJ", "title": "Health information needs, sources, and barriers of primary care patients to achieve patient-centered care: A literature review.", "location": ["University of Nebraska Medical Center, USA.", "University of Missouri, USA.", "University of Wisconsin-Madison, USA.", "University of Missouri, USA.", "University of Missouri, USA."]}, 
    {"author": "Belden JL", "title": "Health information needs, sources, and barriers of primary care patients to achieve patient-centered care: A literature review.", "location": ["University of Nebraska Medical Center, USA.", "University of Missouri, USA.", "University of Wisconsin-Madison, USA.", "University of Missouri, USA.", "University of Missouri, USA."]}, 
    {"author": "Canfield SM", "title": "Health information needs, sources, and barriers of primary care patients to achieve patient-centered care: A literature review.", "location": ["University of Nebraska Medical Center, USA.", "University of Missouri, USA.", "University of Wisconsin-Madison, USA.", "University of Missouri, USA.", "University of Missouri, USA."]}, 
    {"author": "Meadows SE", "title": "Health information needs, sources, and barriers of primary care patients to achieve patient-centered care: A literature review.", "location": ["University of Nebraska Medical Center, USA.", "University of Missouri, USA.", "University of Wisconsin-Madison, USA.", "University of Missouri, USA.", "University of Missouri, USA."]}, 
    {"author": "Elliott SG", "title": "Health information needs, sources, and barriers of primary care patients to achieve patient-centered care: A literature review.", "location": "University of Missouri, USA."}, 
    {"author": "Kim MS", "title": "Health information needs, sources, and barriers of primary care patients to achieve patient-centered care: A literature review.", "location": "University of Missouri, USA kimms@health.missouri.edu."}, 
    {"author": "Koopman RJ", "title": "Physician Information Needs and Electronic Health Records (EHRs): Time to Reengineer the Clinic Note.", "location": "From the Department of Family and Community Medicine (RJK, JLB), the Department of Health Management and Informatics (MAC, MSK), and the Center for Health Policy (SMC), University of Missouri School of Medicine, Columbia; the School of Nursing (LMBS) and the Center for Quality and Productivity Improvement (LMBS), University of Wisconsin, Madison; the School of Information Science and Learning Technologies, College of Education (JLM), and the Informatics Institute (JLM, MAC, MSK), University of Missouri, Columbia. koopmanr@health.missouri.edu."}, 
    {"author": "Steege LM", "title": "Physician Information Needs and Electronic Health Records (EHRs): Time to Reengineer the Clinic Note.", "location": "From the Department of Family and Community Medicine (RJK, JLB), the Department of Health Management and Informatics (MAC, MSK), and the Center for Health Policy (SMC), University of Missouri School of Medicine, Columbia; the School of Nursing (LMBS) and the Center for Quality and Productivity Improvement (LMBS), University of Wisconsin, Madison; the School of Information Science and Learning Technologies, College of Education (JLM), and the Informatics Institute (JLM, MAC, MSK), University of Missouri, Columbia."}, 
    {"author": "Moore JL", "title": "Physician Information Needs and Electronic Health Records (EHRs): Time to Reengineer the Clinic Note.", "location": "From the Department of Family and Community Medicine (RJK, JLB), the Department of Health Management and Informatics (MAC, MSK), and the Center for Health Policy (SMC), University of Missouri School of Medicine, Columbia; the School of Nursing (LMBS) and the Center for Quality and Productivity Improvement (LMBS), University of Wisconsin, Madison; the School of Information Science and Learning Technologies, College of Education (JLM), and the Informatics Institute (JLM, MAC, MSK), University of Missouri, Columbia."}, 
    {"author": "Clarke MA", "title": "Physician Information Needs and Electronic Health Records (EHRs): Time to Reengineer the Clinic Note.", "location": "From the Department of Family and Community Medicine (RJK, JLB), the Department of Health Management and Informatics (MAC, MSK), and the Center for Health Policy (SMC), University of Missouri School of Medicine, Columbia; the School of Nursing (LMBS) and the Center for Quality and Productivity Improvement (LMBS), University of Wisconsin, Madison; the School of Information Science and Learning Technologies, College of Education (JLM), and the Informatics Institute (JLM, MAC, MSK), University of Missouri, Columbia."}, 
    {"author": "Canfield SM", "title": "Physician Information Needs and Electronic Health Records (EHRs): Time to Reengineer the Clinic Note.", "location": "From the Department of Family and Community Medicine (RJK, JLB), the Department of Health Management and Informatics (MAC, MSK), and the Center for Health Policy (SMC), University of Missouri School of Medicine, Columbia; the School of Nursing (LMBS) and the Center for Quality and Productivity Improvement (LMBS), University of Wisconsin, Madison; the School of Information Science and Learning Technologies, College of Education (JLM), and the Informatics Institute (JLM, MAC, MSK), University of Missouri, Columbia."}, 
    {"author": "Kim MS", "title": "Physician Information Needs and Electronic Health Records (EHRs): Time to Reengineer the Clinic Note.", "location": "From the Department of Family and Community Medicine (RJK, JLB), the Department of Health Management and Informatics (MAC, MSK), and the Center for Health Policy (SMC), University of Missouri School of Medicine, Columbia; the School of Nursing (LMBS) and the Center for Quality and Productivity Improvement (LMBS), University of Wisconsin, Madison; the School of Information Science and Learning Technologies, College of Education (JLM), and the Informatics Institute (JLM, MAC, MSK), University of Missouri, Columbia."}, 
    {"author": "Belden JL", "title": "Physician Information Needs and Electronic Health Records (EHRs): Time to Reengineer the Clinic Note.", "location": "From the Department of Family and Community Medicine (RJK, JLB), the Department of Health Management and Informatics (MAC, MSK), and the Center for Health Policy (SMC), University of Missouri School of Medicine, Columbia; the School of Nursing (LMBS) and the Center for Quality and Productivity Improvement (LMBS), University of Wisconsin, Madison; the School of Information Science and Learning Technologies, College of Education (JLM), and the Informatics Institute (JLM, MAC, MSK), University of Missouri, Columbia."}, 
    {"author": "Clarke MA", "title": "Determining differences in user performance between expert and novice primary care doctors when using an electronic health record (EHR).", "location": "Informatics Institute, University of Missouri, Columbia, MO, USA."}, 
    {"author": "Belden JL", "title": "Determining differences in user performance between expert and novice primary care doctors when using an electronic health record (EHR).", "location": []}, 
    {"author": "Kim MS", "title": "Determining differences in user performance between expert and novice primary care doctors when using an electronic health record (EHR).", "location": []}, 
    {"author": "Clarke MA", "title": "Determining primary care physician information needs to inform ambulatory visit note display.", "location": "University of Missouri Informatics Institute, University of Missouri."}, 
    {"author": "Steege LM", "title": "Determining primary care physician information needs to inform ambulatory visit note display.", "location": "School of Information Science and Learning Technology, University of Missouri."}, 
    {"author": "Moore JL", "title": "Determining primary care physician information needs to inform ambulatory visit note display.", "location": []}, 
    {"author": "Koopman RJ", "title": "Determining primary care physician information needs to inform ambulatory visit note display.", "location": "University of Wisconsin-Madison School of Nursing."}, 
    {"author": "Belden JL", "title": "Determining primary care physician information needs to inform ambulatory visit note display.", "location": "University of Wisconsin-Madison School of Nursing."}, 
    {"author": "Kim MS", "title": "Determining primary care physician information needs to inform ambulatory visit note display.", "location": []}, 
    {"author": "Clarke MA", "title": "Information needs and information-seeking behaviour analysis of primary care physicians and nurses: a literature review.", "location": "Informatics Institute, University of Missouri, Columbia, MO 65212, USA. mcyyf@mail.missouri.edu"}, 
    {"author": "Belden JL", "title": "Information needs and information-seeking behaviour analysis of primary care physicians and nurses: a literature review.", "location": []}, 
    {"author": "Koopman RJ", "title": "Information needs and information-seeking behaviour analysis of primary care physicians and nurses: a literature review.", "location": []}, 
    {"author": "Steege LM", "title": "Information needs and information-seeking behaviour analysis of primary care physicians and nurses: a literature review.", "location": []}, 
    {"author": "Moore JL", "title": "Information needs and information-seeking behaviour analysis of primary care physicians and nurses: a literature review.", "location": []}, 
    {"author": "Canfield SM", "title": "Information needs and information-seeking behaviour analysis of primary care physicians and nurses: a literature review.", "location": []}, 
    {"author": "Kim MS", "title": "Information needs and information-seeking behaviour analysis of primary care physicians and nurses: a literature review.", "location": []}, 
    {"author": "Belden JL", "title": "Making EHR notes more readable.", "location": "Curtis W. and Ann H. Long Department of Family & Community Medicine, University of Missouri, Columbia, MO, USA."}, 
    {"author": "Koopman RJ", "title": "Making EHR notes more readable.", "location": []}, 
    {"author": "Kim MS", "title": "A pilot study on usability analysis of emergency department information system by nurses.", "location": ["Department of Health Management and Informatics, University of Missouri School of Medicine, Columbia, MO, USA","Center for Biomedical Informatics, Mount Sinai School of Medicine, New York, NY"]},
    {"author": "Shapiro JS", "title": "A pilot study on usability analysis of emergency department information system by nurses.", "location": ["Center for Biomedical Informatics, Mount Sinai School of Medicine, New York, NY","Emergency Department, Mount Sinai School of Medicine, New York, NY"]}, 
    {"author": "Genes N", "title": "A pilot study on usability analysis of emergency department information system by nurses.", "location": []}, 
    {"author": "Aguilar MV", "title": "A pilot study on usability analysis of emergency department information system by nurses.", "location": []}, 
    {"author": "Mohrer D", "title": "A pilot study on usability analysis of emergency department information system by nurses.", "location": []}, 
    {"author": "Baumlin K", "title": "A pilot study on usability analysis of emergency department information system by nurses.", "location": []}, 
    {"author": "Belden JL", "title": "A pilot study on usability analysis of emergency department information system by nurses.", "location": []}, 
    {"author": "Koopman RJ", "title": "A diabetes dashboard and physician efficiency and accuracy in accessing data needed for high-quality diabetes care.", "location": "Curtis W. and Ann H. Long Department of Family and Community Medicine, University of Missouri, School of Medicine, Columbia, Missouri 65212, USA. koopmanr@health.missouri.edu"}, 
    {"author": "Kochendorfer KM", "title": "A diabetes dashboard and physician efficiency and accuracy in accessing data needed for high-quality diabetes care.", "location": []}, 
    {"author": "Moore JL", "title": "A diabetes dashboard and physician efficiency and accuracy in accessing data needed for high-quality diabetes care.", "location": []}, 
    {"author": "Mehr DR", "title": "A diabetes dashboard and physician efficiency and accuracy in accessing data needed for high-quality diabetes care.", "location": []}, 
    {"author": "Wakefield DS", "title": "A diabetes dashboard and physician efficiency and accuracy in accessing data needed for high-quality diabetes care.", "location": []}, 
    {"author": "Yadamsuren B", "title": "A diabetes dashboard and physician efficiency and accuracy in accessing data needed for high-quality diabetes care.", "location": []}, 
    {"author": "Coberly JS", "title": "A diabetes dashboard and physician efficiency and accuracy in accessing data needed for high-quality diabetes care.", "location": []}, 
    {"author": "Kruse RL", "title": "A diabetes dashboard and physician efficiency and accuracy in accessing data needed for high-quality diabetes care.", "location": []}, 
    {"author": "Wakefield BJ", "title": "A diabetes dashboard and physician efficiency and accuracy in accessing data needed for high-quality diabetes care.", "location": []}, 
    {"author": "Belden JL", "title": "A diabetes dashboard and physician efficiency and accuracy in accessing data needed for high-quality diabetes care.", "location": []}, 
    {"author": "Wakefield DS", "title": "Issues and questions to consider in implementing secure electronic patient-provider web portal communications systems.", "location": "Center for Health Care Quality and Department of Health Management and Informatics, University of Missouri, MO 65212, USA. wakefielddo@health.missouri.edu"}, 
    {"author": "Mehr D", "title": "Issues and questions to consider in implementing secure electronic patient-provider web portal communications systems.", "location": []}, 
    {"author": "Keplinger L", "title": "Issues and questions to consider in implementing secure electronic patient-provider web portal communications systems.", "location": []}, 
    {"author": "Canfield S", "title": "Issues and questions to consider in implementing secure electronic patient-provider web portal communications systems.", "location": []}, 
    {"author": "Gopidi R", "title": "Issues and questions to consider in implementing secure electronic patient-provider web portal communications systems.", "location": []}, 
    {"author": "Wakefield BJ", "title": "Issues and questions to consider in implementing secure electronic patient-provider web portal communications systems.", "location": []}, 
    {"author": "Koopman RJ", "title": "Issues and questions to consider in implementing secure electronic patient-provider web portal communications systems.", "location": []}, 
    {"author": "Belden JL", "title": "Issues and questions to consider in implementing secure electronic patient-provider web portal communications systems.", "location": []}, 
    {"author": "Kruse R", "title": "Issues and questions to consider in implementing secure electronic patient-provider web portal communications systems.", "location": []}, 
    {"author": "Kochendorfer KM", "title": "Issues and questions to consider in implementing secure electronic patient-provider web portal communications systems.", "location": []}, 
    {"author": "Ebell MH", "title": "Clinical inquiries. What is a reasonable initial approach to the patient with fatigue?", "location": "Department of Family Medicine, Michigan State University, USA. ebell@msu.edu"}, 
    {"author": "Belden JL", "title": "Clinical inquiries. What is a reasonable initial approach to the patient with fatigue?", "location": []}];
var  count = {};
console.log("asdasdasdasdas")
authors.forEach(function(i) { 
    count[i.author] = (count[i.author]||0) + 1;
    // count[i.title] = (count[i.title]||0) + 1;
    // count[i.location] = (count[i.location]||0) + 1;
});
console.log(authors.length);
console.log(count);

105
let uniqueAuthors = {
  'Green TA': 1,
  'Whitt S': 1,
  'Belden JL': 17,
  'Erdelez S': 1,
  'Shyu CR': 1,
  'Day MA': 1,
  'Shaffer VA': 1,
  'Wegier P': 2,
  'Valentine KD': 1,
  'Canfield SM': 5,
  'Patil SJ': 2,
  'Popescu M': 1,
  'Steege LM': 6,
  'Jain A': 1,
  'Koopman RJ': 11,
  'Patel J': 1,
  'Hutson A': 1,
  'Plaisant C': 1,
  'Moore JL': 7,
  'Lowrance NJ': 2,
  'Boren SA': 1,
  'Petroski GF': 1,
  'Smith JB': 1,
  'Clarke MA': 7,
  'Kim MS': 8,
  'Meadows SE': 1,
  'Elliott SG': 1,
  'Shapiro JS': 1,
  'Genes N': 1,
  'Aguilar MV': 1,
  'Mohrer D': 1,
  'Baumlin K': 1,
  'Kochendorfer KM': 2,
  'Mehr DR': 1,
  'Wakefield DS': 2,
  'Yadamsuren B': 1,
  'Coberly JS': 1,
  'Kruse RL': 1,
  'Wakefield BJ': 2,
  'Mehr D': 1,
  'Keplinger L': 1,
  'Canfield S': 1,
  'Gopidi R': 1,
  'Kruse R': 1,
  'Ebell MH': 1
}
