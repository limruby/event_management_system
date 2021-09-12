import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../../../assets/css/agency.min.css';

import EditAccount from './editAccount.js';
import EditPassword from './editPassword.js';
import EditProfileComp from './editCompetitor.js';
import EditProfileSponsor from './editSponsor.js';
import EditProfileVisitor from './editVisitor.js';
import EditProfileJudge from './editJudge.js';
import EditPaymentStatus from './editPaymentStatus.js';
import InsertLink from './insertLink';
import CreateProfile from './createAccount.js';
import AssignProject from './assignProject.js';
import UploadReceiptCompetitor from './upload_receipt_competitor.js';
import UploadReceiptSponsor from './upload_receipt_sponsor.js';
import UploadReceiptVisitor from './upload_receipt_visitor.js'


function FormNavigator() {
	// Fetch user ID from URL
	const location = useLocation();
	const thePath = location.pathname;
	const lastPath = thePath.substring(thePath.lastIndexOf('/') + 1);

	if (lastPath === 'edit_account') {
		return (
			<section className="section-container">
				<EditAccount />
			</section>
		)
	}
	else if (lastPath === 'edit_password') {
		return (
			<section className="section-container">
				<EditPassword />
			</section>
		)
	}
	else if (lastPath === 'edit_profile_visitor') {
		return (
			<div className="form-main-container">
				<EditProfileVisitor />
			</div>
		)
	}
	else if (lastPath === 'edit_profile_sponsor') {
		return (
			<div className="form-main-container">
				<EditProfileSponsor />
			</div>
		)
	}
	else if (lastPath === 'edit_profile_competitor') {
		return (
			<div className="form-main-container">
				<EditProfileComp />
			</div>
		)
	}
	else if (lastPath === 'edit_profile_judge') {
		return (
			<section className="section-container">
				<EditProfileJudge />
			</section>
		)
	}
	else if (lastPath === 'create_profile') {
		return (
			<section className="section-container">
				<CreateProfile />
			</section>
		)
	}
	else if (lastPath === 'edit_order_status') {
		return (
			<section className="section-container">
				<EditPaymentStatus />
			</section>
		)
	}
	else if (lastPath === 'upload_receipt_competitor') {
		return (
			<section className="section-container">
				<UploadReceiptCompetitor />
			</section>
		)
	}
	else if (lastPath === 'upload_receipt_sponsor') {
		return (
			<section className="section-container">
				<UploadReceiptSponsor />
			</section>
		)
	}
	else if (lastPath === 'upload_receipt_visitor') {
		return (
			<section className="section-container">
				<UploadReceiptVisitor />
			</section>
		)
	}
	else if (lastPath === 'assign_project_title') {
		return (
			<section className="section-container">
				<AssignProject />
			</section>
		)
	}
	else if (lastPath === 'insert_evaluation_form_link') {
		return (
			<section className="section-container">
				<InsertLink />
			</section>
		)
	}
	else {
		return (
			<></>
		)
	}
}
export default FormNavigator;