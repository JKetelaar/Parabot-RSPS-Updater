package org.paradox.updater.transforms;

import org.objectweb.asm.tree.ClassNode;
import org.objectweb.asm.tree.FieldNode;
import org.paradox.updater.handle.Updater;
import org.paradox.updater.model.FieldContainer;
import org.paradox.updater.model.Transform;

/**
 *
 */
public class Player extends Transform {
    @Override
    public boolean validate(ClassNode classNode) {
        return getClass("Player").equals(classNode);
    }

    @Override
    public void execute(ClassNode classNode) {
        addClass(Updater.classes.get(classNode.superName), "Entity");
        for(FieldNode fn : classNode.fields)  {
            if(fn.desc.contains("java/lang")) {
                FieldContainer fc = new FieldContainer(classNode, fn, "getName");
                addField(fc);
            }
        }
    }
}
