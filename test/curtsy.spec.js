describe("A Curtsy Object", function () {


    it("should be Defined", function () {
        expect(Curtsy).toBeDefined();
    });

    describe("circle function", function () {
        var gesture;

        it("should be Defined", function () {
            expect(Curtsy.circle).toBeDefined();
        });

        it("should detect counter-clockwise", function () {
            gesture = {
                progress: 1,
                normal: [0, 0, 1]
            };
            expect(Curtsy.circle(gesture).type).toBe("counter-clockwise");
            expect(Curtsy.circle(gesture).count).toBe(1);
        });

        it("should detect clockwise", function () {
            gesture = {
                progress: 1,
                normal: [0, 0, -1]
            };
            expect(Curtsy.circle(gesture).type).toBe("clockwise");
            expect(Curtsy.circle(gesture).count).toBe(1);
        });

        it("should detect count of gesture", function () {
            gesture = {
                progress: 2,
                normal: [0, 0, -1]
            };
            expect(Curtsy.circle(gesture).count).toBe(2);
        });

    });

    describe("swipe function", function () {

        var gesture;
        beforeEach(function () {
            gesture = {
                startPosition: [1, 1, 1]
                //position: []
            };
        });


        it("should be Defined", function () {
            expect(Curtsy.swipe).toBeDefined();
        });

        it("should detect swipe-left", function () {
            gesture.position = [0, 1, 1];
            expect(Curtsy.swipe(gesture).type).toBe("left");
            expect(Curtsy.swipe(gesture).distance).toBe(1);
        });

        it("should detect swipe-right", function () {
            gesture.position = [2, 1, 1];
            expect(Curtsy.swipe(gesture).type).toBe("right");
            expect(Curtsy.swipe(gesture).distance).toBe(1);
        });


        it("should detect swipe-down", function () {
            gesture.position = [1, 0, 1];
            expect(Curtsy.swipe(gesture).type).toBe("down");
            expect(Curtsy.swipe(gesture).distance).toBe(1);
        });

        it("should detect swipe-up", function () {
            gesture.position = [1, 2, 1];
            expect(Curtsy.swipe(gesture).type).toBe("up");
            expect(Curtsy.swipe(gesture).distance).toBe(1);
        });

        it("should detect swipe-forward", function () {
            gesture.position = [1, 1, 0];
            expect(Curtsy.swipe(gesture).type).toBe("forward");
            expect(Curtsy.swipe(gesture).distance).toBe(1);
        });

        it("should detect swipe-back", function () {
            gesture.position = [1, 1, 2];
            expect(Curtsy.swipe(gesture).type).toBe("back");
            expect(Curtsy.swipe(gesture).distance).toBe(1);
        });
    });

    describe("direction function", function () {

        it("should be Defined", function () {
            expect(Curtsy.direction).toBeDefined();
        });

        it("should return a empty string on type other tan swipe/circle", function () {
            expect(Curtsy.direction({})).toBe('');
        });

        // TODO: Refactor and call generic swipe and circle tests with function argument


    });


});