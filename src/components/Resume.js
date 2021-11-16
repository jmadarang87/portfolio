import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import { SizeMe } from 'react-sizeme';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber] = useState(1);
	const pdf_data_uri = 'images/madarang_resume.pdf';

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}
	return (
		<>
			<div className='nav-title'>
				<h2>RESUME</h2>
			</div>
			<div className='spacer' />
			<div className='resume-pdf-600'>
				<SizeMe
					monitorHeight
					refreshRate={128}
					refreshMode={'debounce'}
					render={({ size }) => (
						<div className='resume-100'>
							<center>
								<Document
									file={pdf_data_uri}
									onLoadSuccess={onDocumentLoadSuccess}
								>
									<Page
										className='resume-size'
										width={size.width}
										pageNumber={pageNumber}
									/>
								</Document>
							</center>
						</div>
					)}
				/>
			</div>

			<div className='resume-pdf'>
				<center className='bg-color-blk'>
					<Document
						file='images/madarang_resume.pdf'
						onLoadSuccess={onDocumentLoadSuccess}
					>
						<Page pageNumber={pageNumber} />
					</Document>
					<p>
						Page {pageNumber} of {numPages}
					</p>
				</center>
			</div>
			<div className='spacer' />
		</>
	);
};

export default Resume;
