import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const PDFViewer = ({ showResume, setShowResume }: any) => {
	return (
		<Dialog open={showResume} onOpenChange={() => setShowResume(false)}>
			<DialogTitle className="hidden">title</DialogTitle>
			<DialogContent
				onCloseAutoFocus={() => setShowResume(false)}
				className="w-[90vw] bg-light-100"
			>
				<div style={{ width: "100%", height: "100vh" }}>
					<iframe
						src="/YAKUBUMOSHOOD.pdf"
						style={{ width: "100%", height: "100%", border: "none" }}
						title="PDF Viewer"
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default PDFViewer;
