import React, { useState } from 'react'

const speakers = [
	{
		name: 'Rahul Kala',
		title: 'Associate Professor',
		affiliation:
			'Department of IT, ABV-Indian Institute of Information Technology and Management, Gwalior',
		note: 'Center for Autonomous Systems | Computer Vision and Multimedia Laboratory',
		photo: '/Rahul_Kala.png',
		talk: 'Socially-Aware Robot Navigation using Fusion of Physics and Learning-based Approaches',
		bio: `Rahul Kala received the B.Tech. and M.Tech. degrees in Information Technology from the Indian Institute of Information Technology and Management, Gwalior, India in 2010. He received his Ph.D. degree in cybernetics from the University of Reading, UK in 2013. He is currently working as an Associate Professor in the Department of IT at the ABV-Indian Institute of Information Technology and Management, Gwalior, India. He is a member of the Center of Autonomous Systems and the Computer Vision and Multimedia Laboratory. He was previously with the Indian Institute of Information Technology, Allahabad from 2013–2023. He is the author of five books and over 150 papers. He has numerous funded projects from Government agencies and industry to his name. He is an active reviewer of leading journals of the domain. He is a recipient of the Early Career Research Grant from the Department of Science and Technology, Government of India. He is a recipient of the Best PhD dissertation award from the IEEE Intelligent Transportation Systems Society; and a scholarship under the Commonwealth Scholarship and Fellowship Program from the UK Government.`,
	},
	{
		name: 'Pradipta Biswas',
		title: 'Associate Professor',
		affiliation: 'Indian Institute of Science',
		note: 'Interaction Design Lab | Visiting Professor, Centre for Brain Research',
		photo: '/pradiptabiswas.jpg',
		talk: 'A Companion Robot for Disabled and Elderly',
		abstract: `The talk will describe our collaborative work with Vidyasagar, the Spastic Society of Tamil Nadu on developing gaze controlled robotic manipulator for persons with Cerebral palsy. The talk will also focus on different types of Mixed Augmented Reality (MAR) Technology and their utilities as human robot interface. Next, the talk will present a novel rover and a 3D reconstructed digital twin as a companion robot solution. As part of the companion robot, the talk will cover latest research on Visual Language Model (VLM) and Visual Language Action Model (VLA) with case studies of integrating them with gaze controlled rover.`,
		bio: `Pradipta Biswas is an Associate Professor at the Indian Institute of Science. He set up and leads the Interaction Design Lab at IISc. Earlier he worked as a Senior Principal Engineer at Collins Aerospace System, in various leadership positions at the International Telecommunication Union (Telecom branch of UN), Senior Research Associate at the University of Cambridge Engineering Department and Title B1 fellow at the Wolfson College of University of Cambridge. Pradipta is a Gates Cambridge Scholar, undertook PhD in Computer Science from Trinity College, University of Cambridge, UK. His research won various grants and awards from major industries like Intel, British Telecom, Forvia, Collins Aerospace, Siemens, Microsoft Research, Facebook Reality Labs, BEL and so on. He undertook the Voyager Display experiment, which was one of the seven experiments selected during the Axiom 4 mission at the International Space Station. Pradipta is also involved with cockpit design of India's upcoming military aviation platforms.`,
	},
	{
		name: 'Prof. Sujit PB',
		title: 'Speaker',
		affiliation: 'Indian Institute of Science Education and Research Bhopal',
		note: 'sujit@iiserb.ac.in',
	},
	{
		name: 'Sourav Garg',
		title: 'Assistant Professor',
		affiliation: 'Robotics Research Centre, IIIT Hyderabad',
		note: 'sourav.garg@iiit.ac.in',
		photo: '/SouravGarg.jpg',
		talk: 'Intelligence in Robot Navigation',
		bio: `Dr. Sourav Garg is an Assistant Professor at the Robotics Research Centre, IIIT Hyderabad, where he works at the intersection of robotic vision and machine learning, helping robots see, understand, and act as intelligent embodied agents in the physical world. He completed his PhD at the Queensland University of Technology (QUT), Australia, with an award-winning thesis on visual place recognition based robot localization. Sourav's recent series of work on language-queryable topometric mapping and RGB-only navigation policies have set a new paradigm for physical intelligence based on semantic-geometric spatial understanding. He has been granted 4 US patents through his industrial collaborations. His research is published at various prestigious venues including CoRL, CVPR, ICRA, RA-L, NeurIPS, and ECCV, where he also regularly serves as an Area Chair.`,
	},
	{
		name: 'Manohar Kumar',
		title: 'Assistant Professor',
		affiliation: 'IIIT Delhi',
		photo: '/Manohar-Kumar.jpg',
		bio: `Manohar Kumar has a PhD in Political Theory from LUISS University Rome and has held Postdoctoral positions at IIT Delhi and GREQAM, Aix Marseille University. He is the co-author with Daniele Santoro of Speaking Truth to Power. A Theory of Whistleblowing. He has also edited a book 'Social Scientists in the Civic Space. Ethical Perspectives on Democratic Involvement' (with Arundhati Virmani and Jean Boutier). His works have appeared in Philosophy and Social Criticism, International Journal of Social Robotics, IEEE Transactions on Affective Computing, Critical Criminology, Law and Philosophy, IJCAI, Economic and Political Weekly, and in edited volumes of Routledge. He is currently a Principal Investigator of 'Political Theory of AI'.`,
	},
	{
		name: 'Vineet Vashista',
		title: 'Associate Professor',
		affiliation: 'Indian Institute of Technology Gandhinagar',
		note: 'Human-Centered Robotics (HCR) Laboratory',
		photo: '/Vineet-Vashista.jpeg',
		talk: 'Wearable Physical AI: Co-Adaptation and Interaction in Human-Centered Robotics',
		abstract: `Exoskeletons and exosuits play a vital role in rehabilitation and performance augmentation, serving as prime examples of systems operating in direct contact with the human body. The core challenge in these systems lies in achieving comfortable, high-fidelity physical interaction in which the robot seamlessly co-adapts to the user's movement and intent. This talk shares key findings from the Human-Centered Robotics Lab at IIT Gandhinagar on the design and control of human-centered systems. We will discuss gait adaptation studies using cable-driven exoskeletons and passive back exosuits, examining how hardware constraints such as cable routing and pressure distribution affect the physical coupling between human and machine. Additionally, we look at how integrating virtual reality frameworks into these physical systems enhances cognitive immersion and predictive intent detection. The presentation demonstrates how combining physical design, neuroscience, and AI algorithms can advance the next generation of assistive wearable robots.`,
		bio: `Dr. Vineet Vashista is an Associate Professor at the Indian Institute of Technology Gandhinagar, where he leads the Human-Centered Robotics (HCR) Laboratory. He earned his Ph.D. in Mechanical Engineering from Columbia University in 2015 and a Master's in Mechanical Design from IIT Delhi in 2008. His research focuses on human-centered robotic technologies inspired by human motor adaptation, with applications in rehabilitation, wearable robotics, and performance augmentation. Supported by major national and international funding agencies, his work investigates neuro-musculoskeletal processes to design devices that measure and influence human movement. Dr. Vashista is a recipient of the Haryana Yuva Vigyan Ratna Award (2022) and a member of INYAS (2023).`,
	},
]

const ProfileModal = ({ speaker, onClose }) => {
	const hasDetails = speaker.bio || speaker.abstract

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center p-4"
			onClick={onClose}
		>
			{/* Backdrop */}
			<div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

			{/* Modal */}
			<div
				className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Gold top bar */}
				<div className="h-2 bg-gradient-to-r from-[#F5A800] via-[#f2c96b] to-[#7c5c1a] rounded-t-3xl" />

				<div className="p-8 space-y-6">
					{/* Close button */}
					<button
						onClick={onClose}
						className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition-colors"
						aria-label="Close"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
							<line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					</button>

					{/* Header: photo + name */}
					<div className="flex items-start gap-6">
						<div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-[#f1d18c] flex items-center justify-center overflow-hidden">
							{speaker.photo ? (
								<img src={speaker.photo} alt={speaker.name} className="w-full h-full object-cover" />
							) : (
								<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#a56f00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
									<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
								</svg>
							)}
						</div>
						<div className="flex-1 min-w-0">
							<p className="text-xs font-semibold tracking-[0.2em] text-[#a56f00] uppercase">Speaker</p>
							<h2 className="mt-1 text-2xl font-bold text-slate-900 leading-tight">{speaker.name}</h2>
							<p className="mt-1 text-sm font-medium text-slate-600">{speaker.title}</p>
							<p className="mt-1 text-sm text-slate-500">{speaker.affiliation}</p>
							{speaker.note && (
								<p className="mt-1 text-sm text-slate-500">{speaker.note}</p>
							)}
						</div>
					</div>

					{/* Talk */}
					{speaker.talk && (
						<div className="rounded-2xl bg-amber-50 border border-amber-100 p-5">
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a56f00]">Talk</p>
							<p className="mt-2 text-base font-semibold text-slate-900">{speaker.talk}</p>
						</div>
					)}

					{/* Abstract */}
					{speaker.abstract && (
						<div className="space-y-2">
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a56f00]">Abstract</p>
							<p className="text-sm text-slate-600 leading-relaxed">{speaker.abstract}</p>
						</div>
					)}

					{/* Bio */}
					{speaker.bio && (
						<div className="space-y-2">
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a56f00]">Biography</p>
							<p className="text-sm text-slate-600 leading-relaxed">{speaker.bio}</p>
						</div>
					)}

					{!hasDetails && (
						<p className="text-sm text-slate-400 italic text-center py-4">
							More details coming soon.
						</p>
					)}
				</div>
			</div>
		</div>
	)
}

const Speakers = () => {
	const [selected, setSelected] = useState(null)

	return (
		<>
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
				<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
					{speakers.map((speaker) => (
						<article
							key={speaker.name}
							className="overflow-hidden rounded-3xl border border-[#f1d18c] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.08)] flex flex-col"
						>
							<div className="h-2 bg-gradient-to-r from-[#F5A800] via-[#f2c96b] to-[#7c5c1a]" />
							<div className="p-6 space-y-3 flex flex-col flex-1">
								<div className="flex items-start gap-4">
									{/* Photo */}
									<div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-amber-100 to-amber-200 border border-[#f1d18c] flex items-center justify-center">
										{speaker.photo ? (
											<img src={speaker.photo} alt={speaker.name} className="w-full h-full object-cover" />
										) : (
											<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a56f00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
												<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
											</svg>
										)}
									</div>
									<div className="flex-1 min-w-0">
									<p className="text-sm font-semibold tracking-[0.2em] text-[#a56f00] uppercase">
										Speaker
									</p>
									<h3 className="mt-2 text-2xl font-bold text-slate-900">{speaker.name}</h3>
									<p className="mt-1 text-sm font-medium text-slate-600">{speaker.title}</p>
									<p className="mt-2 text-sm text-slate-500">{speaker.affiliation}</p>
								{speaker.note ? (
									<p className="mt-1 text-sm text-slate-500">{speaker.note}</p>
								) : null}
									</div>
								</div>

								{speaker.talk ? (
									<div className="rounded-2xl bg-amber-50/70 p-4">
										<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a56f00]">
											Talk
										</p>
										<p className="mt-2 text-sm font-semibold text-slate-900">
											{speaker.talk}
										</p>
									</div>
								) : null}

								{/* Spacer to push button to bottom */}
								<div className="flex-1" />

								<button
									onClick={() => setSelected(speaker)}
									className="w-full mt-2 py-2.5 px-4 rounded-2xl bg-gradient-to-r from-[#F5A800] to-[#c47f00] text-white text-sm font-semibold tracking-wide hover:opacity-90 active:scale-[0.98] transition-all shadow-sm"
								>
									Know More
								</button>
							</div>
						</article>
					))}
				</div>
			</section>

			{selected && (
				<ProfileModal speaker={selected} onClose={() => setSelected(null)} />
			)}
		</>
	)
}

export default Speakers
