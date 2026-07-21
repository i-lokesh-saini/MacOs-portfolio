import WindowWrapper from '#hoc/WindowWrapper';
import WindowControls from '#components/WindowControls';
import usewindowStore from '#store/window';
import { Download, ChevronLeft } from 'lucide-react';
import React from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Resume = ({ isMobile }) => {
    const { closeWindow } = usewindowStore();

    return (
        <>
            {!isMobile ?
                <>
                    <div id="window-header">
                        <WindowControls target="resume" isMobile={isMobile} />
                        <h2>Resume.pdf</h2>
                        <a href="files/resume.pdf" download className='cursor-pointer' title='Download Resume'>
                            <Download className="icon" />
                        </a>
                    </div>
                    <Document file="files/resume.pdf">
                        <Page pageNumber={1} renderAnnotationLayer renderTextLayer />
                    </Document>
                </>
                :
                <>
                    <div className='window-sm-header'>
                        <WindowControls target="resume" isMobile={isMobile} />
                        <h2>Resume</h2>
                        <div style={{ width: 24 }} />
                    </div>          

                    <div style={{ overflowY: 'auto', flex: 1, display: 'flex', justifyContent: 'center', background: '#0a0a0a', padding: '16px 8px' }}>
                        <Document file="files/resume.pdf">
                            <Page pageNumber={1} width={Math.min(window.innerWidth - 32, 600)} renderAnnotationLayer renderTextLayer />
                        </Document>
                    </div>
                </>
            }
        </>
    );
};

const ResumeWindow = WindowWrapper(Resume, 'resume')

export default ResumeWindow;