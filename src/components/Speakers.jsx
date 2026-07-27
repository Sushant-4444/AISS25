import React from 'react'

const speakers = [
	{
		name: 'Rahul Kala',
		title: 'Associate Professor',
		affiliation:
			'Department of IT, ABV-Indian Institute of Information Technology and Management, Gwalior',
		note: 'Center for Autonomous Systems | Computer Vision and Multimedia Laboratory',
	},
	{
		name: 'Pradipta Biswas',
		title: 'Associate Professor',
		affiliation: 'Indian Institute of Science',
		note: 'Interaction Design Lab | Visiting Professor, Centre for Brain Research',
		talk: 'A Companion Robot for Disabled and Elderly',
	},
	{
		name: 'Prof. Sujit PB',
		title: 'Speaker',
		affiliation: 'Indian Institute of Science Education and Research Bhopal',
		note: 'sujit@iiserb.ac.in',
	},
	{
		name: 'Rajesh Kumar',
		title: 'Speaker',
		affiliation: 'Addverb',
		note: 'rajesh.kumar01@addverb.com',
	},
	{
		name: 'Suvayan Nandi',
		title: 'Speaker',
		affiliation: 'Addverb',
		note: 'suvayan@addverb.com',
	},
	{
		name: 'Sourav Garg',
		title: 'Speaker',
		affiliation: 'Indian Institute of Information Technology',
		note: 'sourav.garg@iiit.ac.in',
	},
]

const Speakers = () => {
	return (
		<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
			<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
				{speakers.map((speaker) => (
					<article
						key={speaker.name}
						className="overflow-hidden rounded-3xl border border-[#f1d18c] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
					>
						<div className="h-2 bg-gradient-to-r from-[#F5A800] via-[#f2c96b] to-[#7c5c1a]" />
						<div className="p-6 space-y-3">
							<div>
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
						</div>
					</article>
				))}
			</div>
		</section>
	)
}

export default Speakers
