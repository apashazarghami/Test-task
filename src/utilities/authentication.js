import toast from "react-hot-toast";
import { goToStepTwo } from "../redux/process/processActions";

export const notify = (content, status) => status === 'success' ? toast.success(content) : toast.error(content);

const authentication = ({ information, processOwner, processViewer, type, dispatch }) => {
    const { processTitle, processIdentifier, processDescription } =  information;
    if(!processTitle.length && !processIdentifier.length && !processOwner.length && !processViewer.length) return notify('وارد کردن عنوان، شناسه، مالک و ناظر فرآیند الزامی می باشد')
    if(!processTitle.length && !processIdentifier.length && !processOwner.length) return notify('وارد کردن عنوان، شناسه و مالک فرآیند الزامی می باشد')
    if(!processTitle.length && !processIdentifier.length && !processViewer.length) return notify('وارد کردن عنوان، شناسه و ناظر فرآیند الزامی می باشد')
    if(!processTitle.length && !processOwner.length && !processViewer.length) return notify('وارد کردن عنوان، مالک و ناظر فرآیند الزامی می باشد')
    if(!processIdentifier.length && !processOwner.length && !processViewer.length) return notify('وارد کردن شناسه، مالک و ناظر فرآیند الزامی می باشد')
    if(!processTitle.length && !processIdentifier.length) return notify('وارد کردن عنوان و شناسه فرآیند الزامی می باشد')
    if(!processTitle.length && !processOwner.length) return notify('وارد کردن عنوان و مالک فرآیند الزامی می باشد')
    if(!processIdentifier.length && !processOwner.length) return notify('وارد کردن شناسه و مالک فرآیند الزامی می باشد')
    if(!processTitle.length && !processViewer.length) return notify('وارد کردن عنوان و ناظر فرآیند الزامی می باشد')
    if(!processIdentifier.length && !processViewer.length) return notify('وارد کردن شناسه و ناظر فرآیند الزامی می باشد')
    if(!processOwner.length && !processViewer.length) return notify('وارد کردن مالک و ناظر فرآیند الزامی می باشد')
    if(!processTitle.length) return notify('وارد کردن عنوان فرآیند الزامی می باشد')
    if(!processIdentifier.length) return notify('وارد کردن شناسه فرآیند الزامی می باشد')
    if(!processOwner.length) return notify('وارد کردن مالک  فرآیند الزامی می باشد')
    if(!processViewer.length) return notify('وارد کردن ناظر فرآیند الزامی می باشد')
    notify('اطلاعات با موفقیت ثبت شد', 'success');
    dispatch(goToStepTwo({ processTitle, processIdentifier, processOwner, processViewer, processDescription }))
}

export default authentication