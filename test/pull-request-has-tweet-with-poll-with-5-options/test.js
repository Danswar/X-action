    `diff --git a/tweets/hello-world.tweet b/tweets/hello-world.tweet
@@ -0,0 +1,7 @@
    tap.equal(body.conclusion, "failure");
    tap.same(body.output, {
>
> ( ) option 1
> ( ) option 2
> ( ) option 3
> ( ) option 4
> ( ) option 5
Polls cannot have more than four options, found 5 options`,
  tap.equal(code, 0);
  tap.same(nock.pendingMocks(), []);