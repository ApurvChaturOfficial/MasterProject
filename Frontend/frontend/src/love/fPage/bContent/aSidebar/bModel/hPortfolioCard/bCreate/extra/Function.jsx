import JoditEditor from 'jodit-react';

const Function = {
  // More JSX
  MoreInfo: (Redux, EventHandler, box1, box2, handleInput) => {
    return (
			<div class="container-fluid pt-4 px-4">
				<div class="row g-4">
					<div class="col-sm-12 col-xl-12">
						<div class="bg-light rounded h-100 p-4">
							<h6 class="mb-4">More Form</h6>
							<form>
								<div class="mb-3">
									<label for="inputEmail3" class="col-sm-2 col-form-label">Description</label>
									<JoditEditor
										ref={box1.editor1}
										value={box1.content1}
										tabIndex={1} // tabIndex of textarea
										onBlur={newContent => box1.setContent1(newContent)} // preferred to use only this option to update the content for performance reasons
										onChange={value => Redux.dispatch({
											type: Redux.action.FormObject,
											payload: {
												...Redux.state.FormObject,
												FormValue: {
													...Redux.state.FormObject?.FormValue,
													description: value,
												},
											},
										})}
									/>
									<div className="form-text text-danger text-start">{Redux.state.FormObject.FormError.description}</div>
								</div>

								<div class="mb-3">
									<label for="inputEmail3" class="col-sm-2 col-form-label">Details</label>
									<JoditEditor
										ref={box2.editor2}
										value={box2.content2}
										tabIndex={2} // tabIndex of textarea
										onBlur={newContent => box2.setContent2(newContent)} // preferred to use only this option to update the content for performance reasons
										onChange={value => Redux.dispatch({
											type: Redux.action.FormObject,
											payload: {
												...Redux.state.FormObject,
												FormValue: {
													...Redux.state.FormObject?.FormValue,
													detail: value,
												},
											},
										})}
									/>
									<div className="form-text text-danger text-start">{Redux.state.FormObject.FormError.description}</div>
								</div>

								<div class="mb-3">
									<label for="inputEmails3" class="col-sm-2 col-form-label">
										Links 
										{Redux.state.FormObject.FormValue.links && 
											Redux.state.FormObject.FormValue.links.length < 3 && 
											<i class="fas fa-plus-circle p-1" onClick={() => EventHandler.Links.Add(Redux)}></i>
										}
									</label>
									{Redux.state.FormObject.FormValue.links && 
										Redux.state.FormObject.FormValue.links.map((each, index) => {
											return (
												<div class="input-group mb-3">
													<div class="input-group">
														<span class="input-group-text" id="basic-addon1">Label</span>
														<input 
															type="text" 
															class="form-control" 
															placeholder="Hello there" 
															aria-label="Label"
															aria-describedby="basic-addon1" 
															name="label"
															value={each.label}
															onChange={event => EventHandler.Links.Change(event, Redux, index)}
														/>
														{Redux.state.FormObject.FormValue.links && 
															Redux.state.FormObject.FormValue.links.length > 1 && 
															<i class="fas fa-minus-circle p-2" onClick={() => EventHandler.Links.Remove(Redux, index)}></i>
														}
													</div>
													<div class="input-group">
														<span class="input-group-text" id="basic-addon1">Icon</span>
														<input 
															type="text" 
															class="form-control" 
															placeholder="Hello there..." 
															aria-label="Icon"
															aria-describedby="basic-addon1" 
															name="icon"
															value={each.icon}
															onChange={event => EventHandler.Links.Change(event, Redux, index)}
														/>
													</div>
													<div class="input-group">
														<span class="input-group-text" id="basic-addon1">URL</span>
														<input 
															type="text" 
															class="form-control" 
															placeholder="Hello there..." 
															aria-label="URL"
															aria-describedby="basic-addon1" 
															name="url"
															value={each.url}
															onChange={event => EventHandler.Links.Change(event, Redux, index)}
														/>
													</div>
												</div>
											)
										})
									}
									{/* <div className="form-text text-danger text-start">{"each.error"}</div> */}
								</div>
								
								<div class="mb-3">
									<label for="inputEmails3" class="col-sm-2 col-form-label">
										References 
										{Redux.state.FormObject.FormValue.references && 
											Redux.state.FormObject.FormValue.references.length < 15 && 
											<i class="fas fa-plus-circle p-1" onClick={() => EventHandler.References.Add(Redux)}></i>
										}
									</label>
									{Redux.state.FormObject.FormValue.references && 
										Redux.state.FormObject.FormValue.references.map((each, index) => {
											return (
												<div class="input-group mb-3">
													<div class="input-group">
														<span class="input-group-text" id="basic-addon1">Label</span>
														<input 
															type="text" 
															class="form-control" 
															placeholder="Hello there" 
															aria-label="Label"
															aria-describedby="basic-addon1" 
															name="label"
															value={each.label}
															onChange={event => EventHandler.References.Change(event, Redux, index)}
														/>
														{Redux.state.FormObject.FormValue.references && 
															Redux.state.FormObject.FormValue.references.length > 1 && 
															<i class="fas fa-minus-circle p-2" onClick={() => EventHandler.References.Remove(Redux, index)}></i>
														}
													</div>
													<div class="input-group">
														<span class="input-group-text" id="basic-addon1">Image</span>
														<input 
															type="text" 
															class="form-control" 
															placeholder="Hello there..." 
															aria-label="Image"
															aria-describedby="basic-addon1" 
															name="image"
															value={each.image}
															onChange={event => EventHandler.References.Change(event, Redux, index)}
														/>
													</div>
													<div class="input-group">
														<span class="input-group-text" id="basic-addon1">URL</span>
														<input 
															type="text" 
															class="form-control" 
															placeholder="Hello there..." 
															aria-label="URL"
															aria-describedby="basic-addon1" 
															name="url"
															value={each.url}
															onChange={event => EventHandler.References.Change(event, Redux, index)}
														/>
													</div>
												</div>
											)
										})
									}
									{/* <div className="form-text text-danger text-start">{"each.error"}</div> */}
								</div>
								
								<div class="mb-3">
                  <label for="inputEmail3" class="col-sm-12 col-form-label">Temp Image</label>
                  <input 
                    type="text"
                    class="form-control" 
                    id="inputEmail13" 
                    placeholder="Hello there..."
                    name="tempImage"
                    onChange={event => handleInput(event, Redux)}
                  />
                  {/* <div className="form-text text-danger text-start">{Redux.state.FormObject.FormError.description}</div> */}
                </div>

							</form>
						</div>
					</div>
				</div>
			</div>
		)
}
}

export default Function
