import {useMutation} from "@apollo/client";
import CREATE_BATTLE from '../../lib/apollo/schemas/createBattle.graphql'
import {useRouter} from "next/router";
import {useUserCtx} from "../UserMiddleware";
import {useEffect} from "react";

export const StartModal = ({oid = "VXNlcgpnMGJlZGZiMDAyMmFhNDYwZmJiNTMzMzg1Y2JlMDc5MWU="}) => {

    const {push} = useRouter()
    const {ctx} = useUserCtx()
    console.log(ctx.id)
    const [create, {data, loading}] = useMutation(CREATE_BATTLE)

    useEffect(() => typeof data !== 'undefined' && push(`/battle/${data?.callBattle?.value?.id}`).then(() => {}), [data])

    return (
        <div className="modal fade" id="startModal" tabIndex="-1" aria-labelledby="startModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content bg-dark border-0 d-flex justify-content-center w-100">
                    {!loading ? (
                        <div className="modal-body text-white">
                            Начать игру ?
                        </div>
                    ) : (
                        <div className="spinner-border text-light text-center" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )}

                    <div className="modal-footer border-0">
                        <button type="button" className="btn btn-secondary-outline text-white"
                                data-bs-dismiss="modal">Отмена
                        </button>
                        <button data-bs-dismiss="modal" type="button" className="btn btn-success" onClick={async () => {
                            await create({
                                variables: {
                                    id: ctx?.id,
                                    oid
                                }
                            })
                        }}>
                            Продолжить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}