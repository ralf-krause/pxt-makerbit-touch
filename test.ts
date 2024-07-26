/**
 * Touch tests
 */

touchBoard.onTouch(TouchSensor.Any, TouchAction.Touched, () => {});
const touchSensor: number = touchBoard.touchSensor();
const isTouched: boolean = touchBoard.isTouched(5);
const wasTouched: boolean = touchBoard.wasTouched();
const index: number = touchBoard.touchSensorIndex(TouchSensor.T5);
