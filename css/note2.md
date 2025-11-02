### These notes are about the how to make animations in css  

animation can be create by making a keyframe like
where we can define the (from and to) or (percentage based on 30% 50% 90% 100%) of an animation  

```css
@keyframe{
    to {}
    from {}
}
@keyframe{
    30% {}
    50% {}
    100% {}
}
```  
it can be applied by these properties given to an element

```css
animation-name /* these we studied in the transition*/
animation-delay  /* these we studied in the transition*/
animation-duration  /* these we studied in the transition*/
animation-timming-function  /* these we studied in the transition*/
animation-iteration-count /* this tells how many times animation will happend it can also be set to infinite or an integer value*/
animation-direction /* 
can be normal it goes to -> from
can be reverse it goes to -> from ->
can be alternate it goes to -> from -> to ....goes on 
can be alternate-reverse applies reverse in the alternate
*/
```  

we can use animation shorthand too which follows  

```css
animation: name         duration timming-function iteration-count delay
animation: myAnimation 2s         linear          infinite        normal
```
